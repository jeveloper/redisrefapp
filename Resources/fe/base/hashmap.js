
exports.HashMap = function(){
  this._dict = [];
}
exports.HashMap.prototype._get = function(key){
  for(var i=0, couplet; couplet = this._dict[i]; i++){
    if(couplet[0] === key){
      return couplet;
    }
  }
}
exports.HashMap.prototype.put = function(key, value){
  var couplet = this._get(key);
  if(couplet){
    couplet[1] = value;
  }else{
    this._dict.push([key, value]);
  }
  return this; // for chaining
}
exports.HashMap.prototype.get = function(key){
  var couplet = this._get(key);
  if(couplet){
    return couplet[1];
  }
}

//converting values to array
exports.HashMap.prototype.toArray = function(){
 var data = [];
 for(var i=0, couplet; couplet = this._dict[i]; i++){
    data.push(couplet[1]);
  }
  return data;
 
}

