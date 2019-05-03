class WrongSwitch {
  constructor() {
  }
  wrongSwitch() {
    console.log("wrong switch");
    let moves = document.querySelector(".movesSpan").textContent;
    const movesBack = () => {
      document.querySelector(".movesSpan").textContent = moves;
    }
    setTimeout(movesBack, 1000);
    const move = document.querySelector(".move");
    const move2 = document.querySelector(".move2");
    const moveLeft = move.style.left;
    const move2Left = move2.style.left;
    const moveTop = move.style.top;
    const move2Top = move2.style.top;
    let moveColumnOrRow;
    let move2ColumnOrRow;
    const moveId = move.id;
    const move2Id = move2.id;
    move.classList.remove("move");
    move2.classList.remove("move2");
    this.newAnimate = new Animate;
    if (moveLeft !== move2Left && moveTop === move2Top) {
      const doAnimate = this.newAnimate.animation(move, "left", move2Left, moveLeft);
      const doAnimate2 = this.newAnimate.animation(move2, "left", moveLeft, move2Left);
      if (move.classList.contains("column1")) {
        moveColumnOrRow = "column1";
      }
      else if (move.classList.contains("column2")) {
        moveColumnOrRow = "column2";
      }
      else if (move.classList.contains("column3")) {
        moveColumnOrRow = "column3";
      }
      else if (move.classList.contains("column4")) {
        moveColumnOrRow = "column4";
      }
      else if (move.classList.contains("column5")) {
        moveColumnOrRow = "column5";
      }
      if (move2.classList.contains("column1")) {
        move2ColumnOrRow = "column1";
      }
      else if (move2.classList.contains("column2")) {
        move2ColumnOrRow = "column2";
      }
      else if (move2.classList.contains("column3")) {
        move2ColumnOrRow = "column3";
      }
      else if (move2.classList.contains("column4")) {
        move2ColumnOrRow = "column4";
      }
      else if (move2.classList.contains("column5")) {
        move2ColumnOrRow = "column5";
      }
    }
    else if (moveTop !== move2Top && moveLeft === move2Left) {
      const doAnimate = this.newAnimate.animation(move, "top", move2Top, moveTop);
      const doAnimate2 = this.newAnimate.animation(move2, "top", moveTop, move2Top);
      if (move.classList.contains("row1")) {
        moveColumnOrRow = "row1";
      }
      else if (move.classList.contains("row2")) {
        moveColumnOrRow = "row2";
      }
      else if (move.classList.contains("row3")) {
        moveColumnOrRow = "row3";
      }
      else if (move.classList.contains("row4")) {
        moveColumnOrRow = "row4";
      }
      else if (move.classList.contains("row5")) {
        moveColumnOrRow = "row5";
      }
      if (move2.classList.contains("row1")) {
        move2ColumnOrRow = "row1";
      }
      else if (move2.classList.contains("row2")) {
        move2ColumnOrRow = "row2";
      }
      else if (move2.classList.contains("row3")) {
        move2ColumnOrRow = "row3";
      }
      else if (move2.classList.contains("row4")) {
        move2ColumnOrRow = "row4";
      }
      else if (move2.classList.contains("row5")) {
        move2ColumnOrRow = "row5";
      }
    }
    move.id = move2Id;
    move2.id = moveId;
    move.classList.remove(moveColumnOrRow);
    move.classList.add(move2ColumnOrRow);
    move2.classList.remove(move2ColumnOrRow);
    move2.classList.add(moveColumnOrRow);
    this.newKeyChecker = new KeyChecker;
    const doKeyChecker = this.newKeyChecker.keyChecker();
  }  
}