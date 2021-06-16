//set 'round' to 1 and set 'point' to 0 at the beginning of the game

// let round = 1;
let point1 = 0;
let point2 = 0;


let definedName1 = prompt('enter your name player 1:')
let randomName = ['lily', 'anna', 'zoe', 'xanthe']
let pickedrandomname = randomName[Math.floor(Math.random() * 4 + 0)]
if (definedName1 == ''){
  console.log("Okay I will pick a name for you. Welcome to the game " + pickedrandomname)
  
}
else (console.log("Welcome to the game " + definedName1))



let definedName2 = prompt('enter your name player 2:')

if (definedName2 == ''){
  console.log("Okay I will pick a name for you. Welcome to the game " + pickedrandomname)
}
else (console.log("Welcome to the game " + definedName2))

let rounds = prompt("How many rounds would you like to have to guess?")

let name1 = (definedName1 || pickedrandomname)
let name2 = (definedName2 || pickedrandomname)



//calling the 'play' function to play the game once
play();

//set up the function, named 'play' contains the core part of the game
function play() {
	random = Math.floor(Math.random() * 20 + 1);
	
	let round1 = 0;
  let round2 = 0;
	 do{
		guess1 = prompt(name1 + ' enter a number from 1-20:');
		if (guess1 > random) {
			console.log('Your number is too high')
		} 
    
    
    else if (guess1 < random) {
			console.log('Your number is too low');
		} 
    else {
			console.log('You got it correct');
		  point1++
		  console.log('Player 1 has ' + point1 + ' points');
      break;
		}
    
    round1++
    
    if (round1 > rounds){
      console.log('Player 1 loses. Player 2 your turn. ')
    }
    
    }
    while (round1 < rounds)
    
   

do{
  
    guess2 = prompt(name2 + ' enter a number from 1-20:');
		if (guess2 > random) {
			console.log('Your number is too high')
		} 
    
    
    else if (guess2 < random) {
			console.log('Your number is too low');
		} 
    else {
			console.log('You got it correct');
		  point2++
		  console.log(name2 + ' has ' + point2 + ' points');
      break;
		} round2++}   
    while (round2 < rounds)
    
    if (round2>rounds){
      console.log('You both lost')
    }

	
	//  {
	// }

//invite the user to play again 

again = prompt('Do you want to play again?');

if (again == 'y') {
  play();
 } else {
	console.log(name1 + ' Your final points are ' + point1)
  console.log(name2 + ', Your final points are ' + point2)
  if (point1 < point2){
    console.log(name2 + ' wins')
  }
  if (point2 < point1) {
    console.log(name1 + ' wins')
  }
   if (point2 = point1) {
    console.log('You guys draw')
  
  }
console.log("game over")
  
 }
}