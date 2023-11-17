
let numberOfGames = prompt("How Many rounds do you want?")

for(let i = 1; i <= numberOfGames;i++)
{
	alert(`Round ${i}`)
	let getUserChoice = userConvertedChoice(prompt(`Round: ${i} Pick one!:Rock,Paper,Scissor`));
let getComputerChoice =  randomizer()
console.log(`Round ${i}`)
  	playGame(getUserChoice,getComputerChoice, showResults)
  	console.log("")
}



function playGame(getUserChoice,getComputerChoice,callback)
	{
		callback(getUserChoice,getComputerChoice)
	}

function showResults(user,computer)
{
	console.log(`USER:${user}`)
	console.log(`COMPUTER:${computer}`)
 if(user.length === computer.length)
 {
 	console.log(`Hey ${user} X ${computer} it's a draw!  `)
 }
 else if (!(user.length === computer.length))
 {
 	if (user.length === 4)
 	{
 	  if(user.length < computer.length && computer.length == 5)
 	  {
 	  	console.log(`${computer} beats ${user}, You Lose!`)
 	  }
 	  else
 	  {
 	  	console.log(`${user} beats ${computer}, You Win!`)
 	  }
 	}
 	if (user.length === 5)
 	{
 	  if(user.length < computer.length && computer.length == 7)
 	  {
 	  	console.log(`${computer} beats ${user}, You Lose!`)
 	  }
 	  else
 	  {
 	  	console.log(`${user} beats ${computer}, You Win!`)
 	  }
 	}
 	if (user.length === 7)
 	{
 	  if(user.length > computer.length && computer.length == 4)
 	  {
 	  	console.log(`${computer} beats ${user}, You Lose!`)
 	  }
 	  else
 	  {
 	  	console.log(`${user} beats ${computer}, You Win!`)
 	  }
 	}
 }
 
}  



//Returns Computer's random pick in string
function randomizer()
{
	let random = Math.floor(Math.random()*3)+1
	if(random === 1 )
	{
		return "Rock"
	}
	else if (random === 2)
	{
		return "Paper"
	}
	else
	{
		return "Scissor"
	}
}
//Returns User's converted input into formal String
function userConvertedChoice(pick)
{
	if(pick.length === 4)
	{
		return "Rock"
	}
	else if(pick.length === 5)
	{
		return "Paper"
	}
	else if (pick.length === 7)
	{
		return "Scissor"
	}
	else
	{
		alert(`${pick} is not in the options -_-`)
	}
}


