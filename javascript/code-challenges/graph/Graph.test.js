'use strict';
const Graph = require('./Graph');

describe('Tests for graph', () => {
  test('Vertex can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    expect(graph.adjList.has(1)).toBeTruthy();
    expect(graph.adjList.has(2)).toBeTruthy();
    expect(graph.adjList.has(3)).toBeFalsy();
  });
  test('An edge can be successfully added to the graph', () => {
    // without weight
    const graph_1 = new Graph();
    graph_1.addVertex(1);
    graph_1.addVertex(2);
    graph_1.addEdge(1,2);
    expect(graph_1.adjList.get(1)).toEqual([2]);
    // with weight
    const graph_2 = new Graph();
    graph_2.addVertex(1);
    graph_2.addVertex(2);
    graph_2.addEdge(1,2, 5);
    expect(graph_2.adjList.get(1)).toEqual([{value: 2, weight: 5}]);
  });
  test('A collection of all vertices can be properly retrieved from the graph', () => {
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    expect(graph.getVertices()).toEqual([1,2,3]);
  });
  test('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addEdge(1,2);
    graph.addEdge(1,3);
    expect(graph.getNeighbors(1)).toEqual([2,3]);
    expect(graph.getNeighbors(4)).toBe('No such vertex exists');
  });
  test('Neighbors are returned with the weight between vertices included', () => {
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addEdge(1,2, 7);
    graph.addEdge(1,3, 8);
    expect(graph.getNeighbors(1)).toEqual([{value: 2, weight: 7},{value: 3, weight: 8}]);
    expect(graph.getNeighbors(4)).toBe('No such vertex exists');
  });
  test('The proper size is returned, representing the number of vertices in the graph', () => {
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(5);
    graph.addVertex(7);
    expect(graph.size()).toEqual(3);
  });
  test('A graph with only one vertex and edge can be properly returned', () => {
    const graph = new Graph();
    graph.addVertex(3);
    expect(graph.addEdge(3,1)).toEqual('Vertex "1" does not exist in the adjacency list');
  });
});
