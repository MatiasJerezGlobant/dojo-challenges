String.prototype.toBase64 = function () {
  return btoa(this);
};
String.prototype.fromBase64 = function () {
  return atob(this);
};

const str = "this is a string!!";
console.log(str.toBase64());
console.log(str.toBase64().fromBase64());
