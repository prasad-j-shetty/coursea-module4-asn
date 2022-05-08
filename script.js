(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var firstLetter = ""
    for (var i = 0; i < names.length; i++) {
        function charAt(i) {
            firstLetter = names[i].toLowerCase();
        };
        charAt(i);
        if (firstLetter[0] === "j") {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

})();
