//Dictionary

var dictionary = ["a", "b", "c", "d", "e", "f", "g", 
"h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Randomized Word Selection

var letter = dictionary[Math.floor(Math.random() * dictionary.length)];

//Variables to determine 
var correct = 0;
var incorrect = 7;

//Variable Display
document.getElementById("incorrect").innerHTML = incorrect;
document.getElementById("correct").innerHTML = correct;
document.getElementById("user").innerHTML = guess;

//UserInPut

//BeginGame 
function beginGame() {
    var letter = dictionary[Math.floor(Math.random() * dictionary.length)];
    document.onkeyup = function(event) {
        var guess = event.key;
        if (guess === letter) {
            correct++;
            incorrect = 7;
            guess = [];
            document.getElementById("nar").innerHTML = "Tim is pleased by your ESP abilties.";
        }  else {
            document.getElementById("incorrect").innerHTML = incorrect - 1;
             
        }
        
        if (incorrect == 0) {
            document.getElementById("nar").innerHTML = "Tim is displeased by your failure and grants you additional tries.";
            incorrect = 7;
            guess = [];
            document.getElementById("user").innerHTML = guess;
        }
    }
}


