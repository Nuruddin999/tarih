// Run: node scripts/check-rashidun.cjs
// Uses the project's existing TypeScript dependency; no network or database.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const previous = require.extensions['.ts'];
require.extensions['.ts'] = (module, filename) => {
  const source = fs.readFileSync(filename, 'utf8');
  module._compile(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText, filename);
};
try {
  const { people, periods } = require('../src/data/chronology.ts');
  const { events } = require('../src/data/events.ts');
  const { rashidunPeople, rashidunEvents } = require('../src/data/rashidun.ts');
  assert.equal(rashidunEvents.length, 50);
  assert.equal(Object.keys(rashidunPeople).length, 34);
  assert.equal(new Set(events.map(e => e.id)).size, events.length, 'duplicate event IDs');
  assert.equal(new Set(events.map(e => e.sortOrder)).size, events.length, 'duplicate event order');
  const epoch = periods.find(p => p.id === 'rashidun');
  assert.ok(epoch);
  const listed = new Set(epoch.groups.flatMap(g => g.people.map(p => p.personId)));
  for (const id of listed) assert.ok(people[id], `unresolved period person ${id}`);
  for (const event of rashidunEvents) {
    assert.equal(event.periodId, epoch.id);
    assert.ok(event.description && event.dateNote);
    assert.ok(event.participants.length > 0);
    assert.equal(new Set(event.participants.map(p => p.personId)).size, event.participants.length);
    for (const person of event.participants) {
      assert.ok(people[person.personId], `unresolved participant ${person.personId}`);
      assert.ok(listed.has(person.personId), `participant absent from people tab: ${person.personId}`);
      assert.ok(person.role && person.sources.length);
    }
    for (const source of [...event.sources, ...event.participants.flatMap(p => p.sources)]) {
      assert.equal(source.volume, '1');
      const page = Number(source.page.split('–')[0]);
      assert.ok(page >= 67 && page <= 165);
      assert.equal(new URL(source.url).hash, `#page=${page + 2}`, 'printed/PDF page mismatch');
    }
    for (const date of [event.start, event.end].filter(Boolean)) assert.ok(date.hijri && date.gregorian);
  }
  for (const [id, person] of Object.entries(rashidunPeople)) {
    assert.equal(person.id, id);
    assert.equal(people[id], person, `person overwritten by an existing record: ${id}`);
    assert.ok(person.sources.length && person.dateNote);
    assert.ok(person.birth.hijri && person.birth.gregorian && person.death.hijri && person.death.gregorian);
    assert.ok(!person.isPromisedParadise, 'new people must not expand the established ten');
  }
  assert.equal(Object.values(people).filter(p => p.isPromisedParadise).length, 10);
  assert.equal(events.filter(e => e.periodId === 'prophetic-era').length, 29);
  for (const key of ['yarmuk', 'camel', 'uthman-quran']) {
    assert.equal(rashidunEvents.find(e => e.id === `rashidun-${key}`).start, undefined, 'disputed date made exact');
  }
  assert.equal(rashidunEvents.at(-1).end.hijri, '41 г. х.');
  // Regression: a known death year must not silently return to the default dash.
  assert.equal(rashidunPeople.yazidAbuSufyan.death.hijri, '18 г. х.');
  assert.ok(rashidunPeople.yazidAbuSufyan.sources.some(s => s.url.includes('/60/82/')));
  assert.ok(rashidunPeople.yazidAbuSufyan.dateNote.includes('19'));
  assert.equal(rashidunPeople.yazidAbuSufyan.birth.hijri, '—');
  assert.equal(Object.values(rashidunPeople).filter(p => p.death.hijri !== '—').length, 30);
  assert.equal(Object.values(rashidunPeople).filter(p => p.birth.hijri !== '—').length, 13);
  for (const id of ['ribiAmir', 'qaqaa', 'asimAmr', 'busrArtat']) {
    assert.equal(rashidunPeople[id].death.hijri, '—', `unverified death made exact: ${id}`);
  }
  for (const id of ['usama', 'zaydThabit', 'muawiya', 'shurahbil', 'iyadGhanm', 'abuHudhayfa', 'mughira', 'ubada']) {
    assert.ok(rashidunPeople[id].birth.hijri.startsWith('ок.'), `inferred birth made exact: ${id}`);
    assert.ok(rashidunPeople[id].dateNote.includes('рассчитано'), `inference not explained: ${id}`);
  }
  console.log('Content OK: 50 events, 34 new people, 52 linked participants; prophetic events and ten badges preserved.');
} finally {
  if (previous) require.extensions['.ts'] = previous;
  else delete require.extensions['.ts'];
}
