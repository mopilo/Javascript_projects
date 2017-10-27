var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var firstScore = document.getElementById("ps1");
var secondScore = document.getElementById("ps2");
var reset = document.getElementById("reset");
var numInput = document.querySelector("input");
var displayNumber = document.querySelector("p span");

var player1Score = 0;
var player2Score = 0;

var gameOver = false;
var winningScore = 5;

player1.addEventListener("click", function()
{
	if(!gameOver)
	{
		player1Score++;
		if (player1Score === winningScore) 
			{
				firstScore.classList.add("winner");
				gameOver =true; 

			}
		firstScore.textContent = player1Score; 

	}
	
});

player2.addEventListener("click", function()
{
	if (!gameOver) 
	{
		player2Score++;
		if(player2Score === winningScore)
			{ 
				secondScore.classList.add("winner");
				gameOver = true;
			}
	}
	
	secondScore.textContent = player2Score;
});

reset.addEventListener("click", resetButton);

function resetButton()
{

	player1Score = 0;
	player2Score = 0;
	firstScore.textContent = player1Score;
	secondScore.textContent = player2Score;
	firstScore.classList.remove("winner");
	secondScore.classList.remove("winner");
	gameOver= false;

}

numInput.addEventListener("change", function()
{
	displayNumber.textContent = numInput.value;
	winningScore = Number(numInput.value); 
	resetButton(); 
});