const board = document.querySelector('.board');
let tableData = document.querySelectorAll('.row > td');
let OTurn = false; //Makes X Start Game
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const createX = (arr) => {
  let X = document.createElement('span');
  arr.appendChild(X).innerText = 'X';
  OTurn = true;
};

const createO = (arr) => {
  let O = document.createElement('span');
  arr.appendChild(O).innerText = 'O';
  OTurn = false;
};

const checkWin = (gameBoard, player) => {
  for (let i = 0; i < winConditions.length; i++) {
    let sum = 0;
    let win = winConditions[i];

    for (let j = 0; j < win.length; j++) {
      if (gameBoard[win[j]].innerText === player) {
        sum++;
        console.log(sum);
      }
    }
    if (sum === 3) return true;
  }
  return false;
};

for (let i = 0; i < tableData.length; i++) {
  tableData[i].addEventListener('click', () => {
    if (OTurn === false) {
      createX(tableData[i]);
      checkWin(tableData, 'X');
    } else {
      createO(tableData[i]);
      checkWin(tableData, 'O');
    }
  });
}
