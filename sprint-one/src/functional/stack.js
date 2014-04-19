var makeStack = function(){
  var instance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};
  var size; // Hint: set an initial value here

  // Implement the methods below
  instance.push = function(value){
  };

  instance.pop = function(){
  };

  instance.size = function(){
  };

  return instance;
};

// a stack works like a set of plates
// we must add to the top and take from the top (last in, first out LIFO)

// we can use a storage object (within an instance of an object) with numeric keys to store each new item.
// by keeping a ref to the size, the last thing we put in will be equal to the current size - 1 (indexing by zero)
// to add something we can store it on our stack object inside a storage object with a numeric key equal to size
// to remove something we can delete the property referred to by size - 1.
// we will add all objects or values and remove all objects/valuesfrom a general storage object.