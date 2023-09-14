class Graph {
  constructor() {
    this.adjList = new Map();
  }
  addVertex(value) {
    if(!this.adjList.has(value)) {
      this.adjList.set(value, []);
      return value;
    }
    else return 'Vertex already exists';
  }
  addEdge(src, dest, w) {
    if(this.adjList.has(src) && this.adjList.has(dest)) {
      if(w) {
        this.adjList.get(src).push({value: dest, weight: w});
        this.adjList.get(dest).push({value: src, weight: w});
      }
      else {
        this.adjList.get(src).push(dest);
        this.adjList.get(dest).push(src);
      }
    }
    else if(!this.adjList.has(src)) return `Vertex "${src}" does not exist in the adjacency list`;
    else if(!this.adjList.has(dest)) return `Vertex "${dest}" does not exist in the adjacency list`;
  }
  getVertices() {
    return Array.from(this.adjList.keys());
  }
  getNeighbors(vertex) {
    return this.adjList.has(vertex) ? Array.from(this.adjList.get(vertex)) : 'No such vertex exists';
  }
  size() {
    return this.adjList.size;
  }
  breadthFirst(startNode) {
    let queue = [startNode];
    let result = [];
    while(queue.length) {
      const node = queue.pop();
      if(!result.includes(node)) {
        result.push(node);
      }
      const neighbors = this.getNeighbors(node);
      for(let i = 0; i < neighbors.length; i++) {
        if(!result.includes(neighbors[i])) {
          queue.unshift(neighbors[i]);
        }
      }
    }
    return result;
  }
  depthFirst(startNode) {
    let collection = [];
    const traverse = (node) => {
      if(!collection.includes(node)) {
        collection.push(node);
      }
      const neighbors = this.getNeighbors(node);
      for(let i = 0; i < neighbors.length; i++) {
        if(!collection.includes(neighbors[i])) {
          traverse(neighbors[i]);
        }
      }
      if(collection.length === this.size()) return;
    };
    traverse(startNode);
    return collection;
  }
}

module.exports = Graph;
