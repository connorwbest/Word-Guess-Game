//Variables 
var words = ["alaska", "alabama", "arkansas", "arizona", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "iowa", "idaho", "illinois", "indiana", "kansas", "kentucky", "louisiana", "massachusetts", "maryland", "maine", "michigan", "minnesota", "missouri", "mississippi", "montana", "north carolina", "north dakota", "nebraska", "new hampshire", "new jersey", "new mexico", "nevada", "new york", "ohio", "oklahoma", "oregon", "pennsylvania", "puerto rico", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "virginia", "vermont", "washington", "wisconsin", "west virginia", "wyoming"];
var arrayGuessed = [];
var arrayWord = words[0].split("");
var guessLeft = 9;
var arrayWordState = [];
var rightGuessCounter = 0;
var wins = 0;

// Function that executes start of game, selects word, assigns _ for number of letters and pushes to WordState
var start = function () {
    arrayWordState = [];
    rightGuessCounter = 0;
    console.log("click");
    arrayWord = words[Math.floor(Math.random() * words.length)];
    console.log(arrayWord.length);
    console.log(arrayWord);
    for (i = 0; i < arrayWord.length; i++) {
        //arrayWord = words[0].split("");
        arrayWordState.push("_");
        //console.log(arrayWordState);
    };
    document.getElementById("word-blanks").innerHTML = arrayWordState;
}

// Button to initiate start function
$("#startgame").on("click", function () {

    start();

    // Function for comparing user guess to random word
    var compare = function(userKey) {
        if (arrayWord.indexOf(userKey) > -1) {
            
            
            for (i = 0; i < arrayWordState.length; i++) {
                if (arrayWord[i] == userKey) {
                    arrayWordState[i] = userKey;
                    document.getElementById("word-blanks").innerHTML = arrayWordState.join(" ");
                    rightGuessCounter++;
                    console.log(arrayWordState);
                    console.log(rightGuessCounter);

                };
            };
        } else {
            guessLeft--;
        }

    };
    // Function for checking if user Wins or Loses
    var winLose = function(){
        if (rightGuessCounter == arrayWordState.length) {
            alert("You win!");
            wins++;
            document.getElementById("Win").innerHTML = ("Wins: " + wins);

        }

        else if(guessLeft == 0){
            alert("You lose!");
        }
        
    }

    // Listens for user input and executes compare function, then executes winLose function
    document.onkeyup = function userSelect(event) {
        event.preventDefault();
        userGuess = event.key.toLowerCase();
        compare(userGuess);


        console.log(guessLeft);
        winLose();
    };
});




















