

// sets player points to 0
let point1 = 0;
let point2 = 0;

//asking for player 1 name
let definedName1 = prompt('enter your name player 1:')
let randomName = ['lily', 'anna', 'zoe', 'xanthe']
//setting a random name 
let pickedrandomname = randomName[Math.floor(Math.random() * 4 + 0)]
//if player doesn't set their own name, program picks a random name
if (definedName1 == ''){
  console.log("Okay I will pick a name for you. Welcome to the game " + pickedrandomname)
  
}
else (console.log("Welcome to the game " + definedName1))


//setting a name for player 2
let definedName2 = prompt('enter your name player 2:')

if (definedName2 == ''){
  console.log("Okay I will pick a name for you. Welcome to the game " + pickedrandomname)
}
else (console.log("Welcome to the game " + definedName2))
//asks players to set a certain number of rounds they want to play for
let rounds = prompt("How many chances would you like to have to guess?")

//setting players names based on whether they gave one or it's a random one
let name1 = (definedName1 || pickedrandomname)
let name2 = (definedName2 || pickedrandomname)



//calling the 'play' function to play the game once
play();

//set up the function, named 'play' contains the core part of the game
function play() {
  //picks a random number
	random = Math.floor(Math.random() * 20 + 1);
	//sets rounds to 0
	let round1 = 0;
  let round2 = 0;
  //sets the game in a loop
	 do{
     //asks player for their guess
		guess1 = prompt(name1 + ' enter a number from 1-20:');
    //what to do if their guess is wrong
		if (guess1 > random) {
			console.log('Your number is too high')
		} 
    
    
    else if (guess1 < random) {
			console.log('Your number is too low');
		} 
    //what happens when their guess is right
    else {
			console.log('You got it correct');
      //adds 1 to point1
		  point1++
		  console.log(name1 + ' has ' + point1 + ' points');
      //breaks loop
      break;
		}
    //adds one to round1
    round1++
    
    
    
    }//loop happens while round1 is less than round
    while (round1 < rounds)
    
   random1 = Math.floor(Math.random() * 20 + 1);
//starts loop for player 2 to play the game
do{
  
    guess2 = prompt(name2 + ' enter a number from 1-20:');
		if (guess2 > random1) {
			console.log('Your number is too high')
		} 
    
    
    else if (guess2 < random1) {
			console.log('Your number is too low');
		} 

    else {
			console.log('You got it correct');
		  point2++
		  console.log(name2 + ' has ' + point2 + ' points');
      break;
		} round2++}   
    while (round2 < rounds)
    
    

	
	

//invite the user to play again 
again = prompt('Do you want to play again?');
//starts the game again if player says y
if (again == 'y') {
  play();
  //otherwise it stops game and declares a winner
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