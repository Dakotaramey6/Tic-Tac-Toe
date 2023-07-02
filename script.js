const board = document.querySelector('.board');
let tableData = document.querySelectorAll('.row > td');
let OTurn = false; //Makes X Start Game

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

const checkWin = () => {
  for (let i = 0; i < tableData.length; i++)
    if (tableData[0].innerText === 'O') {
      alert('ah');
    }
};

for (let i = 0; i < tableData.length; i++) {
  tableData[i].addEventListener('click', () => {
    if (OTurn === false) {
      createX(tableData[i]);
      checkWin();
    } else {
      createO(tableData[i]);
      checkWin();
    }
  });
}
