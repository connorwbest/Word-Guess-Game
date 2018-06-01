//Variables 
var words = ["alaska","alabama","arkansas","arizona","california","colorado","connecticut","delaware","florida","georgia","hawaii","iowa","idaho","illinois","indiana","kansas","kentucky","louisiana","massachusetts","maryland","maine","michigan","minnesota","missouri","mississippi","montana","north carolina","north dakota","nebraska","new hampshire","new jersey","new mexico","nevada","new york","ohio","oklahoma","oregon","pennsylvania","puerto rico","rhode island","south carolina","south dakota","tennessee","texas","utah","virginia","vermont","washington","wisconsin","west virginia","wyoming"];
var arrayGuess = []; 
var arrayWord = words[Math.floor(Math.random() * words.length)].split("");
var arrayWordState = [];

//selects random word and assigns "_"
for (i = 0; i < arrayWord.length; i++) {
    arrayWordState.push("_");
    console.log(arrayWord);
}

//listen for user input
document.onkeyup = function(event) {
    var keyPressed = event.key.toLowerCase();
    console.log(keyPressed);

    for (i = 0; i < arrayWord.length; i++) {
        if (arrayWord[i] == keyPressed) {
            arrayWordState[i] = keyPressed;
            console.log(arrayWordState);
        }
    }
}
 










