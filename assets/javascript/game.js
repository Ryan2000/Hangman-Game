/**
 * Created by ryanhoyda on 5/11/17.
 */
//Variables

//array strings
var wordBank = ["gargoyle", "demon", "ghost", "godzilla", "imp", "giant", "gorgon",
    "pegasus", "ghoul", "horror", "ogre", "vampire", "werewolf", "yeti"];
//string
var currentWord;
//string
var userGuess;
//string
var compGuess;
//string
var lettersGuessed;
//integer
var numGuesses = currentWord * 1.5;
//integer
var numWins;
//integer
var numLosses;

var currentWordArray = [];


function start(){
    numGuesses = 0;
    //random num generator
    var index = Math.floor((Math.random() * wordBank.length));
    currentWord = wordBank[index].toLowerCase();
    currentWordArray = [];
    for (var i = 0; i < currentWord.length; i++){
        currentWordArray.push('_');
    }
}


document.onkeyup = function(event) {

}