let getUserChoice = prompt(" Pick one!:Rock,Paper,Scissor");
let getComputerChoice =  randomizer()


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
 		console.log("hello")
 	}
 }
}  




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