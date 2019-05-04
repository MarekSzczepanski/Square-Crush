class SpaceChecker {
    constructor() {  
    }
    spaceChecker() {
        let space = 0;
        let squaresCrushed = document.querySelector(".pointsSpan").textContent;
        for (let i=0; i<25; i++) {
            if (document.getElementById(i).classList.contains("space")) {
                space = 1; 
            }
        }
        if (space === 1) {
            this.nSAC = new NewSquaresAfterCrush;
            const nSACRow4 = this.nSAC.newSquaresAfterCrush(15, 20, "400px", "300px", 4);
            const nSACRow3 = this.nSAC.newSquaresAfterCrush(10, 15, "300px", "200px", 3);
            const nSACRow2 = this.nSAC.newSquaresAfterCrush(5, 10, "200px", "100px", 2);
            const nSACRow1 = this.nSAC.newSquaresAfterCrush(0, 5, "100px", 0, 1);
            for (let i=0; i<5; i++) {
                const iSquare = document.getElementById(i);
                if (iSquare.classList.contains("space")) {   
                    const newSquare = document.createElement("div");
                    document.querySelector(".wrap").appendChild(newSquare);
                    squaresCrushed++;
                    document.querySelector(".pointsSpan").textContent = squaresCrushed;
                    let newSquareLeft = 0;
                    for (let j=0; j<5; j++) {
                        if (i === j) {
                            newSquare.classList.add("column"+(j+1));
                            newSquare.style.left = newSquareLeft + "px";
                        }
                        newSquareLeft += 100;
                    }
                    const squareToRemove = iSquare;
                    iSquare.parentNode.removeChild(squareToRemove);
                    newSquare.classList.add("square");
                    newSquare.classList.add("row"+1);
                    newSquare.style.top = 0;
                    newSquare.setAttribute("id", i);
                    this.newAnimate = new Animate;
                    const doAnimate = this.newAnimate.animation(document.getElementById(i), "top", "-100px", 0);
                    this.newColor = new RandomSquareColor;
                    const color = this.newColor.getRandomColor();
                    newSquare.style.backgroundColor = color;
                }
            }
            const timeout = () => {
                this.newSpaceChecker = new SpaceChecker;
                const doSpaceChecker = this.newSpaceChecker.spaceChecker(); 
            }
            setTimeout(timeout, 1000);
        }
        else if (space === 0) {
            this.newCrush = new Crush;
            const doCrush = this.newCrush.crush();
        } 
    }          
}  