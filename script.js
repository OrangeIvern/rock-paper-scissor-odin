let getUserChoice = userConvertedChoice(prompt(" Pick one!:Rock,Paper,Scissor"));
let getComputerChoice =  randomizer()
let gameLevels = prompt("How Many rounds do you want?")

playGame(getUserChoice,getComputerChoice, showResults)




function playGame(getUserChoice,getComputerChoice,callback)
{
	callback(getUserChoice,getComputerChoice)
}

function showResults(user,computer)
{
	console.log(user)
	console.log(computer)
 if(user.length === computer.length)
 {
 	console.log(`Hey ${user} ${computer} it's a draw!  `)
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
