const Hashtable = require('./Hashtable');

describe('Hashtable methods test', () => {

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    let table = new Hashtable(10);
    table.set('key1', 'value1');
    expect(table.get('key1')).toBe('value1');
  });

  test('Retrieving based on a key returns the value stored', () => {
    let table = new Hashtable(10);
    table.set('key2', 'value2');
    expect(table.get('key2')).toBe('value2');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let table = new Hashtable(10);
    expect(table.get('keyNonExistent')).toBe('Key does not exist');
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let table = new Hashtable(10);
    table.set('key1', 'value1');
    table.set('key2', 'value2');
    table.set('key3', 'value3');
    expect(table.keys()).toEqual(['key3', 'key2', 'key1']);
  });

  test('Successfully handle a collision within the hashtable', () => {
    let table = new Hashtable(3);
    table.set('key1', 'value1');
    table.set('key2', 'value2');
    expect(table.has('key1')).toBe(true);
    expect(table.has('key2')).toBe(true);
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let table = new Hashtable(3);
    table.set('key1', 'value1');
    table.set('key2', 'value2');
    expect(table.get('key1')).toBe('value1');
    expect(table.get('key2')).toBe('value2');
  });

  test('Successfully hash a key to an in-range value', () => {
    let table = new Hashtable(10);
    let hash = table.hash('keyToTestHashRange');
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThan(10);
  });
});
