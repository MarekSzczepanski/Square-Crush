class SpaceChecker {
    constructor() {
        const arrSquareOrSpace = ["space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space", "space"];
        const squareGoDown = () => {
            for (let i=24; i>-1; i--) {
                if (arrSquareOrSpace[i] === "space" && arrSquareOrSpace[i+5] === "space") {
                    const squareToSpace = document.getElementById("n"+i)
                    const spaceToSquare = document.getElementById("n"+(i+5))
                    squareToSpace.classList.remove("square");
                    squareToSpace.classList.add("space");
                    arrSquareOrSpace[i] = "space";
                    arrSquareOrSpace[i+5] = "square";
                    spaceToSquare.classList.remove("space");
                    spaceToSquare.classList.add("square");
                    this.newColor = new RandomSquareColor;
                    const color = this.newColor.getRandomColor();
                    spaceToSquare.style.backgroundColor = color;
                    if (i<5 && arrSquareOrSpace[i] == "space") {
                        const newSquare = document.getElementById("n"+i);
                        newSquare.classList.remove("space");
                        newSquare.classList.add("square");
                        newSquare.style.top = 0;
                        newSquare.style.backgroundColor = color;
                        arrSquareOrSpace[i] = "square";
                    }  
                }
            }
         }
         squareGoDown();        
    }  
}