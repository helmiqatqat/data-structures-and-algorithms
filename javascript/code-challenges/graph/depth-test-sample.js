const Graph = require('./Graph');

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
graph.addVertex('H');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'E');
graph.addEdge('D', 'H');
graph.addEdge('D', 'F');
graph.addEdge('H', 'F');


console.log(graph.depthFirst('D'));
module.exports = graph;
