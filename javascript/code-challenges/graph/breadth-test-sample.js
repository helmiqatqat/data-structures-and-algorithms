const Graph = require('./Graph');

const graph = new Graph();
graph.addVertex('Pandora');
graph.addVertex('Arendelle');
graph.addVertex('Metroville');
graph.addVertex('Monstropolis');
graph.addVertex('Narnia');
graph.addVertex('Naboo');

graph.addEdge('Pandora', 'Arendelle');
graph.addEdge('Arendelle', 'Metroville');
graph.addEdge('Arendelle', 'Monstropolis');
graph.addEdge('Metroville', 'Monstropolis');
graph.addEdge('Metroville', 'Narnia');
graph.addEdge('Metroville', 'Naboo');
graph.addEdge('Monstropolis', 'Naboo');
graph.addEdge('Narnia', 'Naboo');

module.exports = graph;
