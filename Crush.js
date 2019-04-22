class Crush {
  constructor() {      
  }
  upDown() {
    const arrAllSquares = [];
    let crush = 0;
    let rowNumber;
    const animations = (squareNumber, startWithThisColor) => {
      squareNumber.animate([
        {backgroundColor: startWithThisColor}, 
        {backgroundColor: "white"}
        ], 
        { 
        duration: 2000,
        fill: "forwards"
      });
    }
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
      else {
        rowNumber = 5;
      }
      if (i<15 && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+5].style.backgroundColor && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+10].style.backgroundColor) { 
        console.log("vertical crush");
        animations(arrAllSquares[i], document.getElementById("n"+i).style.backgroundColor);
        animations(arrAllSquares[i+5], document.getElementById("n"+(i+5)).style.backgroundColor);
        animations(arrAllSquares[i+10], document.getElementById("n"+(i+10)).style.backgroundColor);
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
        animations(arrAllSquares[i], document.getElementById("n"+i).style.backgroundColor);
        animations(arrAllSquares[i-1], document.getElementById("n"+(i-1)).style.backgroundColor);
        animations(arrAllSquares[i+1], document.getElementById("n"+(i+1)).style.backgroundColor);
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
      }
    }
    setTimeout(timeoutForTesting, 2000);
  }
}