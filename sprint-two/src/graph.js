var Graph = function(){

  // this.puppies = {
  //   next: kittens;
  // }
  // this.kittens = {
  //   next : puppies
  // }

};

Graph.prototype.addNode = function(newNode, toNode){
    var key;
    this[newNode] = {};


    if(Object.keys(this).length === 2){
      for(key in this){
        if(this[key] === {} && Object.keys(this[key]).length === 0){
          this[key].next = newNode;
          this[newNode].next = this[key];
        }
      }
    }


    if (toNode) {
      this[toNode] = {};
      this[toNode].next = newNode;
      this[newNode].next = toNode;
    }

};

Graph.prototype.contains = function(node){
  var key;
  for(key in this){
    if(key === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var key;
  for (key in this) {
    if (key === node) {
      delete this[key];
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

var graph = new Graph();
graph.addNode("puppies");
graph.addNode("kittens");
// addNode(kittens, puppies);
// addNode(sharks, kittens);

// {
//   kittens = {
//     next : puppies
//   }
//   sharks = {
//     next: kittens
//   }
// }
