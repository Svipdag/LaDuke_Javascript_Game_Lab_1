const play = prompt('Would you like to play a game?');
if (play === 'no' || play === 'No' || play === 'NO'){
  console.log('Bye Felicia');
} else if(play === 'yes' || play === 'Yes' || play === 'YES'){
const name = prompt('What is your name?');

let player = 40;
let Grant = 10;
let wins = 0;

while(wins < 3 && player > 0){
player -= Math.floor(Math.random()*2+1);
console.log(`${name}'s health points are now ${player}`); 
Grant -= Math.floor(Math.random()*2+1);
console.log(`Grant's health points are now ${Grant}`);
if(Grant <= 0){
  console.log('Grant is defeated');
  Grant = 10;
  wins = wins +1;
} 
}
if(wins === 3){  
console.log(`Fatality. ${name} Wins`);
} else if(wins < 3){
console.log('Grant Wins');
}
}
