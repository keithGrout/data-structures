var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    var result = storage[0];
    delete storage[0];
    if(storage[1]){
      storage[0] = storage[1];
    }
    size && size--;
    return result;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

// b should equal b

// a queue is a storage object that has a first in first out access type. 
// for example, a customer in a theme park line is the first one in the 
// line and the first one to leave the line (and join the ride)

// the implication of this:

// the last thing we add to the queue can only be accessed by removing all of the 
// values that were previously added. Another, perhaps better way of saying this,
// is that the only thing we can remove, is the oldest element that was added.
// So thinking of an array, we can only add elements to the end and remove them 
// from the beginning. 