//Variables 
var words = ["alaska","alabama","arkansas","arizona","california","colorado","connecticut","delaware","florida","georgia","hawaii","iowa","idaho","illinois","indiana","kansas","kentucky","louisiana","massachusetts","maryland","maine","michigan","minnesota","missouri","mississippi","montana","north carolina","north dakota","nebraska","new hampshire","new jersey","new mexico","nevada","new york","ohio","oklahoma","oregon","pennsylvania","puerto rico","rhode island","south carolina","south dakota","tennessee","texas","utah","virginia","vermont","washington","wisconsin","west virginia","wyoming"];
var arrayGuess = []; 
var arrayWord = words[0].split("");//[Math.floor(Math.random() * words.length)].split("");
//var userGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//var arrayWordState = [];

//selects random word and assigns "_"
document.onkeyup = function randomWord() {
    arrayWordState = [];
    arrayWord = words[Math.floor(Math.random() * words.length)];
    console.log(arrayWord);
    for (i = 0; i < arrayWord.length; i++) {
    arrayWordState.push("_");
    document.getElementById("word-blanks").innerHTML = arrayWordState;
    console.log(arrayWordState);
    }
}
//listens for user input, assigns input to corresponding "_"
document.onkeypress = function userSelect(event) {
    arrayWordState = [];
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
     //keyPressed = userGuess;
    for (i = 0; i < arrayWord.length; i++) {
        if (arrayWord[i] == userGuess) {
            arrayWordState[i] = userGuess;
            console.log(arrayWordState);
           } 
    }
}


 










