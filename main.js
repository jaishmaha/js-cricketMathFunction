//Program to play cricket with two players by using Math functions in Javascript.

var playBtn= document.getElementById("play-btn"),
	resetBtn = document.getElementById("reset-btn"),
	player1Element= document.getElementById("player1-score"),
	player2Element= document.getElementById("player2-score"),
	playerRes = document.getElementById("result"),
	player1score = 0,
	player2score = 0,
	batting="player1";
	
function randomNum()
{
	let randomNumber=Math.random();
	randomNumber=randomNumber*10;
	randomNumber=Math.floor(randomNumber);	
	return randomNumber;	
}

function play()
{
	let run= randomNum();
	console.log(run);
	if( run>=7)
	{
		if(batting== "player1")
		{
			batting= "player2";
		}
		else
		{
			gameOver();
		}
	}
	else 
	{
		if(run==5)
		{
			run=1;
		}
		if(batting=="player1")
		{
			player1score+=run;
		}
		else
			{
			player2score+=run;
		}
	
	updateScore();
}
}

function updateScore()
{
	player1Element.innerHTML = player1score;
	player2Element.innerHTML = player2score;
	
	if(batting == "player2")
	{
		if(player2score > player1score)
		{
			gameOver();
		}
	}

}

function gameOver()
{
	if(player1score > player2score){
		console.log("player1 won");
		playerRes.innerHTML= "Player1 WON";
	}
	else if(player1score < player2score){
		console.log("player2 won");
		playerRes.innerHTML= "Player2 WON";
	}
	else{
		playerRes.innerHTML="Match Tie";
	}
}

function resetScore()
{
	player1score = 0;
	player2score = 0;
	playerRes.innerHTML = " ";
	batting = "player1";
	updateScore();
}

playBtn.addEventListener("click",play);
resetBtn.addEventListener("click",resetScore);