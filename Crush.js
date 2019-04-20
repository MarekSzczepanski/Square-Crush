class Crush {
  constructor() {      
  }
  upDown() {
    const allSquares = document.querySelectorAll(".square");
    const arrAllSquares = [...allSquares];
    for (let i=0; i<25; i++) {
      if (i<15 && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+5].style.backgroundColor && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+10].style.backgroundColor) {
        console.log("vertical crush");
        arrAllSquares[i].classList.remove("square");
        arrAllSquares[i].classList.add("space");
        arrAllSquares[i+5].classList.remove("square");
        arrAllSquares[i+5].classList.add("space");
        arrAllSquares[i+10].classList.remove("square");
        arrAllSquares[i+10].classList.add("space");
        arrAllSquares[i].animate([
          {backgroundColor: arrAllSquares[i].style.backgroundColor}, 
          {backgroundColor: "white"}
          ], 
          { 
          duration: 3000,
          fill: "forwards"
        });
        arrAllSquares[i+5].animate([
          {backgroundColor: arrAllSquares[i].style.backgroundColor}, 
          {backgroundColor: "white"}
          ], 
          { 
          duration: 3000,
          fill: "forwards"
        });
        arrAllSquares[i+10].animate([
          {backgroundColor: arrAllSquares[i].style.backgroundColor}, 
          {backgroundColor: "white"}
          ], 
          { 
          duration: 3000,
          fill: "forwards"
        });
      }
    }
    this.newSpaceChecker = new SpaceChecker;
    const doSquareGoDown = this.newSpaceChecker.goDownAfterCrush();  
  }
}