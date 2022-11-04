'use strict';

class Vertex{
  constructor(value){
    this.value = value
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(value){
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0){
    // find the node we want to connect to and grab its edge array
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes(){
    return this.adjacencyList.keys; // ? maybe... 
  }

  breadthFirst(root, callback){
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(queue.length){
      current = queue.pop();

      // we do something with our callback IF WE NEED
      if(callback) callback(current.value);

      // grab neighbors if they exist
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    // what do we need to return?  choosing to return entire set, use as you will
    return visited;
  }

  // uses stack functionality instead of queue
  depthFirst(root, cb){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (stack.length) {
      current = stack.pop();

      // do something if we want
      if (cb) cb(current.value);

      // grab neighbors?
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }

    return visited;
  }
}

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, E);

graph.breadthFirst(A, console.log);
console.log('_________________');
graph.depthFirst(A, console.log);
