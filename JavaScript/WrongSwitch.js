class WrongSwitch {
  constructor() {
  }
  wrongSwitch() {
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
    const moveColumnsAndRows = (columnOrRow) => {
      for (let i=1; i<6; i++) {
        if (move.classList.contains(columnOrRow+i)) {
          moveColumnOrRow = columnOrRow+i;
        }
        if (move2.classList.contains(columnOrRow+i)) {
          move2ColumnOrRow = columnOrRow+i;
        }
      }
    }
    if (moveLeft !== move2Left && moveTop === move2Top) {
      const doAnimate = this.newAnimate.animation(move, "left", move2Left, moveLeft);
      const doAnimate2 = this.newAnimate.animation(move2, "left", moveLeft, move2Left);
      moveColumnsAndRows("column");
    }
    else if (moveTop !== move2Top && moveLeft === move2Left) {
      const doAnimate = this.newAnimate.animation(move, "top", move2Top, moveTop);
      const doAnimate2 = this.newAnimate.animation(move2, "top", moveTop, move2Top);
      moveColumnsAndRows("row");
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