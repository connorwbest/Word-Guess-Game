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
    wins = 0;
    guessLeft = 9;
    arrayGuessed = [];
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
    document.getElementById("guessesleft").innerHTML = ("Guesses Left: " + guessLeft);
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
            document.getElementById("guessesleft").innerHTML = ("Guesses Left: " + guessLeft);
        }

    };
    // Function for checking if user Wins or Loses
    var winLose = function(){
        if (rightGuessCounter == arrayWordState.length) {
            alert("You win! The word was " + arrayWord);
            wins++;
            document.getElementById("Win").innerHTML = ("Wins: " + wins);
            
            reset();
        }

        else if(guessLeft == 0){
            alert("You lose!");

            reset();
        }
        
    }

    var reset = function(){
        arrayWordState = [];
        arrayWord = [];
        rightGuessCounter = 0;
        guessLeft = 9;
        arrayGuessed = [];

        arrayWord = words[Math.floor(Math.random() * words.length)];
    console.log(arrayWord.length);
    console.log(arrayWord);
    for (i = 0; i < arrayWord.length; i++) {
        //arrayWord = words[0].split("");
        arrayWordState.push("_");
        //console.log(arrayWordState);
    };
    document.getElementById("word-blanks").innerHTML = arrayWordState;
    document.getElementById("guessesleft").innerHTML = ("Guesses Left: " + guessLeft);
    document.getElementById("guesses").innerHTML = ("Letters Already Guessed: " + arrayGuessed);



    };

    // Listens for user input and executes compare function, then executes winLose function
    document.onkeyup = function userSelect(event) {
        event.preventDefault();
        userGuess = event.key.toLowerCase();
        arrayGuessed.push(userGuess);
        console.log(arrayGuessed);
        compare(userGuess);
        document.getElementById("guesses").innerHTML = ("Letters Already Guessed: " + arrayGuessed);



        console.log(guessLeft);
        winLose();
    };
});




















