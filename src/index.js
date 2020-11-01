
const {SolveLine} = require('./lib/solve')




var readlineSync = require('readline-sync');
var colors = require('colors');
const showCredits = require('./lib/credits');



console.log("Welcome To Lisp like Parser".blue.bgWhite)


while(true) {
  let input = readlineSync.question('> ');
  if(input.trim()=='quit') {
    showCredits()
    console.log("Bye")
    break
  }
  console.log(SolveLine(input.trim()))
}









