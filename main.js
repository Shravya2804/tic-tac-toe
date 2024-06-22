window.onload = setup

const XWON = "X";
const OWON = "O";
const DRAW = "D";


let statusDisplay
function setup() {
    statusDisplay = document.querySelector('.gamestatus');   
    console.log(statusDisplay)
}

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const winConditions = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function clicked(cell) 
{
    console.log(cell)
    // check if the clicked cell is empty
    if(!(cell.innerHTML === "") || gameActive === false){
        return;
    }
    // print current player in the clicked cell and update gamestate
    cell.innerHTML = currentPlayer
    console.log(currentPlayer, "currentPlayer")
    let id = cell.id
    gameState[id] = currentPlayer
    console.log(gameState)

    // check if there is a winning condition and print winmessage
    let iswin = checkwin()
    if(iswin === true) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return 
    }
    
    let isdraw = checkdraw()
    if(isdraw === true) {
        statusDisplay.innerHTML = "the game is drawn"
        gameActive = false
        return 
    }

    // check for a draw condtion

    // switch player
    switchPlayers()
}
  
function switchPlayers()
{
    if (currentPlayer =="X")
    {
        currentPlayer = "O";
    } 
    else 
    {
        currentPlayer = "X";
    }
    statusDisplay.innerHTML = currentPlayerTurn();
}

function checkwin() {
    let winninground = false;
    for (let i = 0; i <= 7; i++) {
        let a = gameState[winConditions[i][0]];
        let b = gameState[winConditions[i][1]];
        let c = gameState[winConditions[i][2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            winninground = true;
            console.log(i)
            break
        }
    }
    return winninground 
}   

function RestartGame() 
{
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.box').forEach(cell => cell.innerHTML = "");
}

function checkdraw() {
    for(let i = 0; i < 9; i++) {
        if(gameState[i] === "") {
            return false
        }
    }
    return true 
}


//First Move

//Finishing Move that allows CPU to win the game

//Saving Move that allows CPU to save the game

//Predicting a move that will trap the CPU and avoiding it

//And if none of these fit, a Random move.
