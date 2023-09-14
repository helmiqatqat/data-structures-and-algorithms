const graph = require('./depth-test-sample');

describe('Depth first method test', () => {
  test('Starting with A node', () => {
    expect(graph.depthFirst('A')).toEqual(
      ['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F']
    );
  });
  test('Starting with D node', () => {
    expect(graph.depthFirst('D')).toEqual(
      ['D', 'A', 'B', 'C', 'G', 'E', 'H', 'F']
    );
  });
});