class Crush {
  constructor() {      
  }
  upDown() {
    const arrAllSquares = [];
    for (let i=0; i<25; i++) {
      arrAllSquares.push(document.getElementById("n"+i));
    }
    let crush = 0;
    for (let i=0; i<25; i++) {
      if (i<15 && arrAllSquares[i].classList.contains("square") && arrAllSquares[i+5].classList.contains("square") && arrAllSquares[i+10].classList.contains("square") && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+5].style.backgroundColor && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+10].style.backgroundColor) { 
        console.log("vertical crush");
        const animations = (squareNumber, startWithThisColor,) => {
          squareNumber.animate([
            {backgroundColor: startWithThisColor}, 
            {backgroundColor: "white"}
            ], 
            { 
            duration: 2000,
            fill: "forwards"
          });
        }
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
    }
    if (crush === 1) {
      this.newSpaceChecker = new SpaceChecker;
      const doSpaceChecker = this.newSpaceChecker.spaceChecker();
    }
    else {
      console.log("no crush");
    }
  }
}