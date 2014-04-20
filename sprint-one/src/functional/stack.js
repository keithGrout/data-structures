var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;


  // Implement the methods below
  instance.push = function(value){
    // storage object above is always directly accessible using closure scope.
    // size is going to double as the index we will be adding and removing from
    // (size - 1 when removing) since we can only add or remove directly from the top
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    // we need to remove the top of the stack
    // the top of the stack is = to size - 1;
    var val = storage[size - 1]; // just make sure we store the value so we can return it after we delete it.
    delete storage[size - 1];
    size && size--;
    return val;

  };

  instance.size = function(){
    return size;
  };

  return instance;
};

var stack = makeStack();

stack.push('a');
stack.push('b');
stack.pop();
// a stack works like a set of plates
// we must add to the top and take from the top (last in, first out LIFO)

// we can use a storage object (within an instance of an object) with numeric keys to store each new item.
// by keeping a ref to the size, the last thing we put in will be equal to the current size - 1 (indexing by zero)
// to add something we can store it on our stack object inside a storage object with a numeric key equal to size
// to remove something we can delete the property referred to by size - 1.
// we will add all objects or values and remove all objects/valuesfrom a general storage object.

