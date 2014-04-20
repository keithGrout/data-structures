var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

// takes a key value pair and returns an index
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i);
  // todo: tuple array might be undefined

  if(tupleArray === undefined){
  	tupleArray = [];
  }

  var found = false;
  for(var j = 0; j < tupleArray.length; j++){
  	var tuple = tupleArray[j];
  	if(tuple[0] === k){
  		tuple[1] = v;
  		found = true;
  	}
  }

  if(!found){
  	tupleArray.push([k,v]); // only if key is not there.
  }

  this._storage.set(i, tupleArray);
};

// retrieve takes a key and returns a value
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

};

// The hash function takes a key and the max value which === the
// length of the array and returns an index which contains another array 
// where each index contains a tuple array where we will store our kv
// pair at index 0 and 1.