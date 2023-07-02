//Global VARS
const board = document.querySelector('.board');
const table = document.querySelector('table');
let tableData = document.querySelectorAll('.row > td');
let neonBtn = document.querySelector('button');
let OTurn = false; //Makes X Start first Game
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

const createX = (arr) => {
  let X = document.createElement('span');
  X.classList.toggle('clicked');
  arr.appendChild(X).innerText = 'X';
  OTurn = true;
};

const createO = (arr) => {
  let O = document.createElement('span');
  O.classList.toggle('clicked');
  arr.appendChild(O).innerText = 'O';
  OTurn = false;
};

const startNewGame = (player, loser) => {
  alert(`${player} Wins ${loser} starts the next game`);
  board.remove(boardText);
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
    if (sum === 3) return true; //return true if sum equal to 3
  }
  return false;
};

for (let i = 0; i < tableData.length; i++) {
  //iterates over tabledata and then adds an event listener
  tableData[i].addEventListener('click', () => {
    if (OTurn === false) {
      createX(tableData[i]); //creates X based off function CreateX on clicked td
      checkWin(tableData, 'X');
      if (checkWin === true) {
        startNewGame('X', 'O');
      }
    } else {
      createO(tableData[i]); //creates O based off function CreateO on clicked td
      checkWin(tableData, 'O');
      if (checkWin === true) {
        startNewGame('O', 'X');
      }
    }
  });
}

const neonTime = () => {
  table.classList.toggle('neon-mode');
  neonHTML.classList.toggle('neon-mode-doc');
  neonH1.classList.toggle('neon-mode-h1');
  neonBtn.classList.toggle('btn-neon');

  //changes btn text based on mode
  if (table.className === 'neon-mode') {
    neonBtn.innerText = 'Basic Mode';
  } else {
    neonBtn.innerText = 'Neon Mode';
  }
};

neonBtn.addEventListener('click', neonTime);
