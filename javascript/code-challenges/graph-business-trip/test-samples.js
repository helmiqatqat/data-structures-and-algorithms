const Graph = require('../graph/Graph');

const graph = new Graph();
graph.addVertex('Pandora');
graph.addVertex('Arendelle');
graph.addVertex('Metroville');
graph.addVertex('Monstropolis');
graph.addVertex('Narnia');
graph.addVertex('Naboo');

graph.addEdge('Pandora', 'Arendelle', 150);
graph.addEdge('Pandora', 'Metroville', 82);
graph.addEdge('Arendelle', 'Metroville', 99);
graph.addEdge('Arendelle', 'Monstropolis', 42);
graph.addEdge('Metroville', 'Monstropolis', 105);
graph.addEdge('Metroville', 'Narnia', 37);
graph.addEdge('Metroville', 'Naboo', 26);
graph.addEdge('Monstropolis', 'Naboo', 73);
graph.addEdge('Narnia', 'Naboo', 250);

module.exports = graph;
