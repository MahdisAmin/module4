(function (window) {
var helloSomeWord = {};
  var whatToSay = "Hello";
  helloSomeWord.speak = function (name) {
    console.log(whatToSay + " " + name);
  };
  window.helloSomeWord = helloSomeWord;

})(window);
