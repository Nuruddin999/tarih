// Run: node scripts/check-unique-period-people.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, filename);

const { uniquePeriodPeople } = require('../src/lib/uniquePeriodPeople.ts');
const { people, periods } = require('../src/data/chronology.ts');
const { events } = require('../src/data/events.ts');

const snapshot = JSON.stringify({ people, periods, events });
const displayPeriods = uniquePeriodPeople(periods);
const locations = new Map();
for (const period of displayPeriods) for (const group of period.groups) for (const entry of group.people) {
  assert.ok(!locations.has(entry.personId), `person repeated: ${entry.personId}`);
  locations.set(entry.personId, period.id);
}
const originalIds = new Set(periods.flatMap(p => p.groups.flatMap(g => g.people.map(e => e.personId))));
assert.equal(locations.size, originalIds.size, 'a person disappeared entirely');
for (const id of originalIds) {
  const firstPeriod = periods.find(p => p.groups.some(g => g.people.some(e => e.personId === id)));
  assert.equal(locations.get(id), firstPeriod.id, `wrong first era for ${id}`);
}
assert.equal(locations.get('abuBakr'), 'prophetic-era');
assert.equal(locations.get('umar'), 'prophetic-era');
assert.ok(!displayPeriods.find(p => p.id === 'rashidun').groups.some(g => g.people.some(e => e.personId === 'abuBakr')));
const abuBakrEvents = events.filter(e => e.periodId === 'rashidun' && e.participants.some(p => p.personId === 'abuBakr'));
assert.ok(abuBakrEvents.length > 0, 'Abu Bakr lost his event links');
for (const event of abuBakrEvents) for (const participant of event.participants) {
  assert.ok(people[participant.personId], 'event participant card cannot be resolved');
}
assert.equal(JSON.stringify({ people, periods, events }), snapshot, 'source data mutated');
assert.deepEqual(uniquePeriodPeople(displayPeriods), displayPeriods, 'not idempotent');

// An era with only repeat participants still exists for its events; first-entry metadata survives.
const fixture = [{ id: 'first', groups: [
  { id: 'one', people: [{ personId: 'a', featured: true, description: 'original' }] },
  { id: 'two', people: [{ personId: 'a' }, { personId: 'b' }] },
] }, { id: 'later', groups: [{ id: 'repeat', people: [{ personId: 'a' }] }] }];
const result = uniquePeriodPeople(fixture);
assert.deepEqual(result[0].groups[0].people, fixture[0].groups[0].people);
assert.deepEqual(result[0].groups[1].people, [{ personId: 'b' }]);
assert.equal(result[1].id, 'later');
assert.deepEqual(result[1].groups, []);
assert.equal(fixture[1].groups[0].people.length, 1);
console.log(`OK: ${locations.size} unique people; Abu Bakr appears in the prophetic era only and retains ${abuBakrEvents.length} Rashidun event links.`);
