// Tic Tac Toe Game

// Create the game board
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
  
// Variable to keep track of the current player ('X' or 'O')
let currentPlayer = 'X';
// Show current player start
document.getElementById('showCurrent').innerHTML = currentPlayer;
  
// Function to check if a player has won
function checkWin(player) {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (board[row][0] === player && board[row][1] === player && board[row][2] === player) { 
            return true;
        }
    }
    
    // Check columns
    for (let col = 0; col < 3; col++) {
        if (board[0][col] === player && board[1][col] === player && board[2][col] === player) {   
        return true;
        }
    }
    
    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }

    return false;
}
  
// Function to check if the game is a tie
function checkTie() {
for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        if (board[row][col] === '') {
            return false;
        }
    }
}
return true;
}
  
// Function to handle a player's move
let tie = 0;
let X = 0;
let O = 0;
let gameActive = true;

function makeMove(row, col) {
    if (gameActive == true){
        if (board[row][col] === '') {
            board[row][col] = currentPlayer;
    
            // Update the cell in the HTML
            document.getElementById('board').children[row].children[col].innerHTML = currentPlayer;
            document.getElementById('result');
                        
            // Check if the current player has won
            if (checkWin(currentPlayer)) {
                result.innerHTML = ('Player ' + currentPlayer + ' wins!');
                if (currentPlayer === 'X'){
                    X++;
                    document.getElementById('Xwins').textContent = X;
                    gameActive = false;
                } else {
                    O++;
                    document.getElementById('Owins').textContent = O;
                    gameActive = false;
                }
            } else if (checkTie()) {
                result.innerHTML = ('It\'s a tie!');
                tie++;
                document.getElementById('tie').textContent = tie;
            } else {
                // Switch to the next player
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        }
    }   
}
  
// Function to reset the game
function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // Switch player start
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }

    // Clear the cells in the HTML
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }

    // Clear result state
    result.innerHTML = ('');

    // Set game active
    gameActive = true;

    // Show current player
    document.getElementById('showCurrent').innerHTML = currentPlayer;
}