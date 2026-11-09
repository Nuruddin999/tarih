// Data integrity checks: dates, linked people, source pages, era boundaries and regressions.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, filename);
const { people, periods } = require('../src/data/chronology.ts');
const { events } = require('../src/data/events.ts');
const { umayyadEvents, umayyadPeople, boundaryScholarEvents } = require('../src/data/umayyad.ts');
const { uniquePeriodPeople } = require('../src/lib/uniquePeriodPeople.ts');
const { yearRange } = require('../src/lib/contemporaries.ts');
assert.equal(umayyadEvents.length, 60);
assert.equal(new Set(events.map(e => e.id)).size, events.length);
assert.equal(new Set(events.map(e => e.sortOrder)).size, events.length);
const era = periods.find(p => p.id === 'umayyad');
assert.ok(era);
assert.equal(era.dates.hijri, '41–132 г. х.');
let previous = 41;
for (const e of umayyadEvents) {
  const year = yearRange(e.start.hijri)[0];
  assert.ok(year >= previous && year <= 132, `out-of-order or out-of-era event: ${e.id}`);
  previous = year;
  assert.equal(e.periodId, era.id);
  assert.ok(e.description && e.sources.length && e.participants.length);
  if (e.end) assert.ok(yearRange(e.end.hijri)[0] >= year);
  assert.equal(new Set(e.participants.map(p => p.personId)).size, e.participants.length);
  for (const p of e.participants) {
    assert.ok(people[p.personId], `unresolved participant: ${p.personId}`);
    assert.ok(p.role && p.sources.length);
  }
  for (const source of e.sources) {
    assert.ok(source.title && new URL(source.url));
    if (source.page) {
      const page = Number(source.page.split('–')[0]);
      assert.ok(page >= 173 && page <= 233);
      assert.equal(new URL(source.url).hash, `#page=${page + 2}`);
    }
  }
}
for (const [id,p] of Object.entries(umayyadPeople)) assert.equal(people[id],p, `overwritten identity ${id}`);
for (const p of era.groups.flatMap(g=>g.people)) assert.ok(people[p.personId]);
const displayed = uniquePeriodPeople(periods);
const location = id => displayed.find(p=>p.groups.some(g=>g.people.some(e=>e.personId===id)))?.id;
assert.equal(location('muawiya'), 'rashidun');
assert.equal(location('ibnAbbas'), 'rashidun');
assert.equal(location('aisha'), 'prophetic-era');
assert.equal(location('malik'), 'umayyad');
assert.equal(location('shaybani'), 'early-schools');
assert.equal(boundaryScholarEvents.length, 2);
for (const e of boundaryScholarEvents) {
  assert.equal(e.periodId, 'early-schools');
  assert.ok(e.dateNote.includes('не утверждение'));
  assert.ok(people[e.participants[0].personId]);
}
assert.equal(umayyadEvents.find(e=>e.id==='umayyad-india').start.hijri, '93 г. х.');
assert.equal(umayyadEvents.find(e=>e.id==='umayyad-turk-campaigns').start.hijri, '79 г. х.');
assert.equal(umayyadEvents.find(e=>e.id==='umayyad-dahhak').start.hijri, '127 г. х.');
assert.ok(umayyadEvents.find(e=>e.id==='umayyad-shabib').participants.some(p=>p.personId==='shabib'));
assert.ok(!umayyadEvents.find(e=>e.id==='umayyad-shabib').participants.some(p=>p.personId==='dahhakShaybani'));
for (const id of ['abu-musa-death','aisha-death','umm-salama-death','mujahid-death','zuhayr-death']) {
  assert.ok(/верси|датиров|спорн|другие|встречаются/.test(umayyadEvents.find(e=>e.id===`umayyad-${id}`).dateNote));
}
assert.equal(events.filter(e=>e.periodId==='prophetic-era').length,30);
assert.equal(events.filter(e=>e.periodId==='rashidun').length,50);
console.log(`Umayyad OK: ${umayyadEvents.length} events, ${Object.keys(umayyadPeople).length} new people, 2 boundary births; links and chronology verified.`);
