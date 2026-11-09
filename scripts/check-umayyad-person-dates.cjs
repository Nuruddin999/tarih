const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, filename);
const { people } = require('../src/data/chronology.ts');
const { umayyadPeople, umayyadEvents } = require('../src/data/umayyad.ts');
const { overlap, yearRange } = require('../src/lib/contemporaries.ts');
const audit = require('../docs/umayyad-person-dates.json');
// Regression: regnal dates must never become life dates.
assert.equal(people.walidAbdMalik.birth.hijri, '50 г. х.');
assert.equal(people.abdMalik.birth.hijri, '26 г. х.');
assert.equal(people.umarAbdAziz.birth.hijri, '61 г. х.');
assert.equal(people.marwanMuhammad.birth.hijri, '72 г. х.');
assert.equal(people.yazidMuawiya.death.hijri, '64 г. х.');
assert.equal(people.tariqZiyad.death.hijri, '102 г. х.');
assert.equal(people.uqbaNafi.birth.hijri, '1 до х.');
assert.deepEqual(yearRange(people.uqbaNafi.birth.hijri), [0,0], 'no year zero in historical labels');
for (const [id, person] of Object.entries(umayyadPeople)) {
  assert.equal(people[id], person, `updated person hidden by another record: ${id}`);
  assert.ok(!person.dateNote.includes('Непроверенные даты жизни не заполняются'), `placeholder note: ${id}`);
  assert.ok(person.sources.length && person.dateNote, `missing provenance: ${id}`);
  const b = yearRange(person.birth.hijri), d = yearRange(person.death.hijri);
  if (b && d) assert.ok(b[0] <= d[1], `death precedes birth: ${id}`);
  for (const date of [person.birth, person.death]) {
    assert.notEqual(date.hijri, '—', `unreviewed placeholder: ${id}`);
    if (yearRange(date.hijri)) assert.notEqual(date.gregorian,'—', `missing second calendar: ${id}`);
  }
  if (person.birth.hijri.startsWith('ок.')) assert.match(person.dateNote,/рассчитано|рассказ|приблизительно|приближённость/, `unexplained estimate: ${id}`);
  const evidence = audit.find(entry => entry.id === id);
  assert.ok(evidence?.sources.length, `no research record: ${id}`);
  for (const source of evidence.sources) assert.ok(person.sources.some(s=>s.url===source.url), `lost source ${id}`);
}
// Unknown dates must not accidentally create artificial contemporary matches.
assert.equal(overlap(people.tarifMalik, people.umarAbdAziz), null);
assert.equal(people.hassanNuman.death.hijri,'Не установлено', 'contradictory 80 AH made exact');
assert.equal(people.muhammadQasim.death.hijri,'Не установлено', 'contradictory 95 AH made exact');
assert.match(people.hassanNuman.dateNote,/80.*86/);
assert.match(people.muhammadQasim.dateNote,/95.*96/);
const qutayba = people.qutayba;
assert.ok(overlap(qutayba,people.walidAbdMalik), 'confirmed contemporary comparison unavailable');
// Both tab cards and event dialogs resolve the same updated records.
for (const event of umayyadEvents) for (const p of event.participants) assert.ok(people[p.personId]);
console.log('Person dates OK: life chronology, estimated years, unresolved conflicts, event links and contemporary comparisons.');
