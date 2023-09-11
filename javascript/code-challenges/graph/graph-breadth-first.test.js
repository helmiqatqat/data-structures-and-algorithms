const graph = require('./breadth-test-sample');

describe('Breadth first method test', () => {
  test('Starting with Pandora node', () => {
    expect(graph.breadthFirst('Pandora')).toEqual(
      ['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Narnia', 'Naboo']
    );
  });
  test('Starting with Metroville node', () => {
    expect(graph.breadthFirst('Metroville')).toEqual(
      ['Metroville', 'Arendelle', 'Monstropolis', 'Narnia', 'Naboo', 'Pandora']
    );
  });
});
