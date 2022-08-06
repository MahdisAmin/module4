(function (window) {
  var goodbyeJsome = {};
  var whatToSay = "GoodBye";
  goodbyeJsome.speak = function (name) {
    console.log(whatToSay + " " + name);
  };
  window.goodbyeJsome = goodbyeJsome;

})(window);
