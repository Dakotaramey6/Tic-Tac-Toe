//Global VARS
const board = document.querySelector('.board');
let tableData = document.querySelectorAll('.row > td');
let neonBtn = document.querySelector('button');
//Vars for the scoreboard
let xWinner = document.getElementById('xcounter');
let oWinner = document.getElementById('ocounter');
let noWinner = document.getElementById('tiecounter');

let OTurn = false; //Makes X Start first Game
let click = 0; //counts 'clicks' really just win a user places a X or O
let winConditions = [
  //sets an array with win condtions used in check win function
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
//these vars are used for neon/darkmode
let neonHTML = document.querySelector('html');
let neonH1 = document.querySelector('h1');
const table = document.querySelector('#gameboard');
const scoreBoard = document.querySelector('#scoreboard');

const createX = (arr) => {
  let X = document.createElement('span');
  X.classList.toggle('clicked');
  arr.appendChild(X).innerText = 'X';
  click++;
  OTurn = true;
};

const createO = (arr) => {
  let O = document.createElement('span');
  O.classList.toggle('clicked');
  arr.appendChild(O).innerText = 'O';
  click++;
  OTurn = false;
};

const startNewGame = (winner, loser) => {
  alert(`${winner} Wins ${loser} starts the next game`);
  setTimeout(() => {
    for (i = 0; i < tableData.length; i++) {
      tableData[i].innerText = '';
    }
  }, 2000);
  if (winner === 'X') {
    OTurn = true;
  } else {
    OTurn = false;
  }
};

const handleTie = () => {
  alert(`Its a tie!`);
  click = 0;
  scoreboardCounter();
  setTimeout(() => {
    for (i = 0; i < tableData.length; i++) {
      tableData[i].innerText = '';
    }
  }, 2000);
};

const scoreboardCounter = (addWinner) => {
  let xCount = document.createElement('p');
  let oCount = document.createElement('p');
  oWinner.appendChild(xCount);
  let tieCount = document.createElement('p');
  noWinner.appendChild(xCount);

  if (addWinner === 'X') {
    xWinner.appendChild(xCount).innerText = '\u2713';
  } else if (addWinner === 'O') {
    oWinner.appendChild(oCount).innerText = '\u2713';
  } else {
    noWinner.appendChild(tieCount).innerText = '\u2713';
  }
};

const checkWin = (gameBoard, player) => {
  //takes two params and iterates over win condition
  for (let i = 0; i < winConditions.length; i++) {
    let sum = 0; //sets sum to 0
    let win = winConditions[i];

    for (let j = 0; j < win.length; j++) {
      if (gameBoard[win[j]].innerText === player) {
        //iterates over board and if innertext === to param X or o then add to existing sum
        sum++;
      }
    }
    if (sum === 3 && player === 'X') {
      scoreboardCounter('X');
      click = 0;
      return startNewGame('X', 'O'); //return true if sum equal to 3
    } else if (sum === 3 && player === 'O') {
      scoreboardCounter('O');
      click = 0;
      return startNewGame('O', 'X');
    }
  }
  return false;
};

for (let i = 0; i < tableData.length; i++) {
  //iterates over tabledata and then adds an event listener
  tableData[i].addEventListener('click', () => {
    if (tableData[i].innerText.length > 0) {
      return false;
    }
    if (OTurn === false) {
      createX(tableData[i], click); //creates X based off function CreateX on clicked td
      checkWin(tableData, 'X');
    } else {
      createO(tableData[i], click); //creates O based off function CreateO on clicked td
      checkWin(tableData, 'O');
    }
    //handles a tie situation
    if (click === 9) {
      handleTie();
    }
  });
}

const neonTime = () => {
  //toggles document changes for neon/dark mode
  table.classList.toggle('neon-mode');
  neonHTML.classList.toggle('neon-mode-doc');
  neonH1.classList.toggle('neon-mode-h1');
  neonBtn.classList.toggle('btn-neon');
  scoreBoard.classList.toggle('scoreboard-neon-mode');

  //changes btn text based on mode
  if (table.className === 'neon-mode') {
    neonBtn.innerText = 'Basic Mode';
  } else {
    neonBtn.innerText = 'Neon Mode';
  }
};

neonBtn.addEventListener('click', neonTime);
