const board = document.getElementById("chessboard");

let selectedSquare = null;

const initialBoard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

function createBoard() {
  board.innerHTML = "";
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.classList.add((row + col) % 2 === 0 ? "white" : "black");
      square.dataset.row = row;
      square.dataset.col = col;
      square.textContent = initialBoard[row][col];

      square.addEventListener("click", () => handleMove(square));

      board.appendChild(square);
    }
  }
}

function handleMove(square) {
  const row = square.dataset.row;
  const col = square.dataset.col;
  const piece = initialBoard[row][col];

  if (selectedSquare) {
    const prevRow = selectedSquare.dataset.row;
    const prevCol = selectedSquare.dataset.col;

    
    initialBoard[row][col] = initialBoard[prevRow][prevCol];
    initialBoard[prevRow][prevCol] = "";

    selectedSquare = null;
    createBoard();
  } else if (piece !== "") {
    selectedSquare = square;
    square.style.border = "2px solid red";
  }
}

createBoard();
