// alert("Hello");
let state = [1,0,1,0,1,0,0,1,0];
let flag = true;
const winnerDiv = document.getElementById('winnerDiv');
let turn = document.querySelector('#turn');
let xCount = document.querySelector('xWin');
let oCount = document.querySelector('oWin');
document.querySelector('#grid').addEventListener('click',(e)=>{
    var boxId = e.target.id;
    // console.log(boxId);
	if(boxId != "")
	{
		if(state[boxId] == 1 || state[boxId] == 0)
		{
			if(flag)
			{
				e.target.innerHTML = "X";
				e.target.style.color = "red";
				state[boxId] = "X";
				turn.innerHTML = "Turn for: O";
			}
			else
			{
				e.target.innerHTML = "O";
				e.target.style.color = "blue";
				state[boxId] = "O";
				turn.innerHTML = "Turn for: X";
			}
			flag=!flag;
			// console.log(state);
			checkWinner(!flag);
		}
	}
});

function setWinner()
{
	if(!flag)
	{
		winnerDiv.style.visibility = "visible";
		winnerDiv.innerText = "X Wins!";
		turn.style.visibility = "visible";
		turn.innerText = "Congratulations to the winner! You can click 'Restart Game' for another match";
		xCount++;
		// console.log(`X Winner = ${xCount}`);
		// console.log(`O Winner = ${oCount}`);
		xWin.innerText = xCount;
	}	
	else
	{
		winnerDiv.style.visibility = "visible";
		winnerDiv.innerText = "O Wins!";
		turn.style.visibility = "visible";
		turn.innerText = "Congratulations to the winner! You can click 'Restart Game' for another match";
		oCount++;
		// console.log(`X Winner = ${xCount}`);
		// console.log(`O Winner = ${oCount}`);
		oWin.innerText = oCount;
	}	
}

function checkWinner(flag)
{
	if((state[0] == state[1]) && (state[0] == state[2]))
	{
		// alert("Row 1 winner!");
		setWinner();
		setPattern(0,1,2);
		disableMove();

	}	
	else if((state[3] == state[4]) && (state[3] == state[5]))
	{
		// alert("Row 2 winner");
		setWinner();
		setPattern(3,4,5);
		disableMove();
	}	
	else if((state[6] == state[7]) && (state[6] == state[8]))
	{
		// alert("Row 3 winner");
		setWinner();
		setPattern(6,7,8);
		disableMove();
	}	
	else if((state[0] == state[3]) && (state[0] == state[6]))
	{
		// alert("Column 1 winner");
		setWinner();
		setPattern(0,3,6);
		disableMove();
	}	
	else if((state[1] == state[4]) && (state[1] == state[7]))
	{
		// alert("Column 2 winner");
		setWinner();
		setPattern(1,4,7);
		disableMove();
	}	
	else if((state[2] == state[5]) && (state[2] == state[8]))
	{
		// alert("Column 3 winner");
		setWinner();
		setPattern(2,5,8);
		disableMove();
	}	
	else if((state[0] == state[4]) && (state[0] == state[8]))
	{
		// alert("Diagonal winner");
		setWinner();
		setPattern(0,4,8);
		disableMove();
	}	
	else if((state[2] == state[4]) && (state[2] == state[6]))
	{
		// alert("Rev. Diagonal winner");
		setWinner();
		setPattern(2,4,6);
		disableMove();
	}	
	else
	{
		//Match Draw
		let count = 9;
		for(let i=0;i<9;i++)
		{
			if(state[i] == "X" || state[i] == "O")
			{
				count--;
			}
		}
		if(count == 0)
		{
			winnerDiv.style.visibility = "visible";
			winnerDiv.innerHTML = "Match Tied!";
			turn.innerText = "Click 'Restart Game' for another match";
		}
	}
}

function setPattern(a,b,c)
{
	document.getElementById(b).style.backgroundColor = "lightgreen";
	document.getElementById(a).style.backgroundColor = "lightgreen";
	document.getElementById(c).style.backgroundColor = "lightgreen";
	
}

function disableMove()
{
	for(let i=0;i<9;i++)
	{
		if(state[i] == 1 || state[i] == 0)
		{
			state[i] = null;
		}
	}
}

function reset()
{
	if(confirm("Are you sure you want to reset the game? This will result in loss of progress of wins by each player?"))
	{
		window.location.reload();
		xCount = 0;
		oCount = 0;
	}
}

function restart()
{
	for(let i=0;i<9;i++)
	{
		document.getElementById(i).innerText = "";
		document.getElementById(i).style.backgroundColor = "white";
	}
	winnerDiv.style.visibility = "hidden";
	turn.innerHTML = "Click on any box to start the game";
	state = [1,0,1,0,1,0,0,1,0];
	flag = true;
}