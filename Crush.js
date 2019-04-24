class Crush {
  constructor() {      
  }
  upDown() {
    const arrAllSquares = [];
    let crush = 0;
    let rowNumber;
    for (let i=0; i<25; i++) {
      arrAllSquares.push(document.getElementById("n"+i));
    }
    for (let i=0; i<25; i++) {
      if (i<6) {
        rowNumber = 1;
      }
      else if (i<11) {
        rowNumber = 2;
      }
      else if (i<16) {
        rowNumber = 3;
      }
      else if (i<21) {
        rowNumber = 4;
      }
      else if (i<25) {
        rowNumber = 5;
      }
      if (i<15 && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+5].style.backgroundColor && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+10].style.backgroundColor) { 
        console.log("vertical crush");
        this.newAnimate = new Animate;
        const doAnimate = this.newAnimate.squareAnimation(arrAllSquares[i], "backgroundColor", document.getElementById("n"+i).style.backgroundColor, "white");
        const doAnimate2 = this.newAnimate.squareAnimation(arrAllSquares[i+5], "backgroundColor", document.getElementById("n"+i).style.backgroundColor, "white");
        const doAnimate3 = this.newAnimate.squareAnimation(arrAllSquares[i+10], "backgroundColor", document.getElementById("n"+i).style.backgroundColor, "white");
        arrAllSquares[i].classList.remove("square");
        arrAllSquares[i].classList.add("space");
        arrAllSquares[i+5].classList.remove("square");
        arrAllSquares[i+5].classList.add("space");
        arrAllSquares[i+10].classList.remove("square");
        arrAllSquares[i+10].classList.add("space");
        crush = 1;
      }
      if (i>0 && i<24 && arrAllSquares[i].style.backgroundColor === arrAllSquares[i-1].style.backgroundColor && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+1].style.backgroundColor && arrAllSquares[i].classList.contains("row"+rowNumber) && arrAllSquares[i-1].classList.contains("row"+rowNumber) && arrAllSquares[i+1].classList.contains("row"+rowNumber)) {
        console.log("horizontal crush");
        this.newAnimate = new Animate;
        const doAnimate = this.newAnimate.squareAnimation(arrAllSquares[i], "backgroundColor", document.getElementById("n"+i).style.backgroundColor, "white");
        const doAnimate2 = this.newAnimate.squareAnimation(arrAllSquares[i-1], "backgroundColor", document.getElementById("n"+i).style.backgroundColor, "white");
        const doAnimate3 = this.newAnimate.squareAnimation(arrAllSquares[i+1], "backgroundColor", document.getElementById("n"+i).style.backgroundColor, "white");
        arrAllSquares[i].classList.remove("square");
        arrAllSquares[i].classList.add("space");
        arrAllSquares[i-1].classList.remove("square");
        arrAllSquares[i-1].classList.add("space");
        arrAllSquares[i+1].classList.remove("square");
        arrAllSquares[i+1].classList.add("space");
        crush = 1;
      }
    }
    const timeoutForTesting = () => {
      if (crush === 1) {
        this.newSpaceChecker = new SpaceChecker;
        const doSpaceChecker = this.newSpaceChecker.spaceChecker();
      }
      else {
        console.log("no crush");
        this.newMoveSquare = new MoveSquare;
        const doMoveSquare = this.newMoveSquare.moveSquare();
      }
    }
    setTimeout(timeoutForTesting, 2000);
  }
}