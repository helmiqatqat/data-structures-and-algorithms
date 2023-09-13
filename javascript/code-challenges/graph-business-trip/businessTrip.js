const businessTrip = (graph, cityArrays) => {
  let cost = 0;
  for(let i = 0 ; i < cityArrays.length - 1; i++) {
    const nodeNeighbors = graph.getNeighbors(cityArrays[i]);
    if(nodeNeighbors) {
      const hasNode = nodeNeighbors.some( e => e.value === cityArrays[i + 1]);
      if(hasNode) {
        const currentNode =  nodeNeighbors.filter(e => e.value === cityArrays[i + 1]);
        cost = cost + currentNode[0].weight;
      }
      else {
        return null;
      }
    }
    else {
      return null;
    }
  }
  return cost + '$';
};

module.exports = businessTrip;
