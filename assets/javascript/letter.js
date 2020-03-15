// variables
var dictionary = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//constant variables
var correct = 0;
var incorrect = 7;
var guesses = [];
// game function
function initGame() {
    document.getElementById("nar").innerHTML = "AND GUESS!";
    // random letter 
    var rndm = dictionary[Math.floor(Math.random() * dictionary.length)];
    document.onkeyup = function (event) {
        var guess = event.key.toLowerCase();
        // guess is correct
        if (guess === rndm) {
            correct++;
            document.getElementById("nar").innerHTML = "Tim is pleased by your " +
                "esp abilities!";
            reset();
        }
        // if user runs out of guesses
        else if (incorrect === 0) {
            document.getElementById("nar").innerHTML = "Tim is displeased by " +
                "your failure and grants you additional tries!";
            reset();
        }
        // if guess is incorrect
        else if (guess != rndm) {
            // if user guess has already been attempted
            if (dictionary.indexOf(guess)) {
                document.getElementById("nar").innerHTML = "Tim's ESP abilities suggest" +
                    " that '" + guess + "' has already been guessed. Try Again!";
            }
            incorrect--;
            guesses.push(guess);
        }
        document.getElementById("user").innerHTML = guess;
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("correct").innerHTML = correct;
        document.getElementById("incorrect").innerHTML = incorrect;
    }
};
// function to reset user tries and empty guess array
function reset() {
    incorrect = 7;
    guesses = [];
    initGame();
};
