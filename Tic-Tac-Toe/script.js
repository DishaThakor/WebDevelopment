let boxes = document.querySelectorAll('.box'); //For access all boxes who have class='box'
let resetBtn = document.querySelector('#reset-btn');
let newBtn = document.querySelector('#new-btn');
let msgCont = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true; //player X and O (here first value will be O)
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    // console.log('Box was clicked');

    if (turnO) {
      //means if turnO === true
      //player O
      box.innerText = 'O';
      turnO = false;
    }
    //player X
    else {
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
//

//Function for Show winner(Here we pass argument as a winner)
const showWinner = (winner) => {
  msg.innerText = `Congratulatuons, Winner is ${winner}`;
  msgCont.classList.remove('hide');
  disableBoxes();
};
//Function for check winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    //here pattern is a var. of winPatterns
    // console.log(pattern);//It will check our patterns/ele of array one by one
    // console.log(//indexes of our patterns
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText);
    let pos1 = boxes[pattern[0]].innerText; //it will store valur of index Text like O or X
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != '' && pos2 != '' && pos3 != '') {
      if (pos1 === pos2 && pos2 === pos3) {
        // console.log('Winner', pos1);
        showWinner(pos1);
      }
    }
  }
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = '';
  }
};
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgCont.classList.add('hide');
};

newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);
