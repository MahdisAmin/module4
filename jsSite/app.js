(function () {
  var names = [
    "Yaakov",
    "niki",
    "jen",
    "Jason",
    "James",
    "Larry",
    "John",
    "Christian",
    "Joodi",
    "Jim",
    "Chatrine"
  ];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === "j") {
      goodbyeJsome.speak(names[i]);
    } else {
      helloSomeWord.speak(names[i]);
    }
  }
})();
