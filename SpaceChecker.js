class SpaceChecker {
    constructor() {  
    }
    spaceChecker() {
        let space = 0;
        for (let i=0; i<25; i++) {
            if (document.getElementById("n"+i).classList.contains("space")) {
                console.log("space");
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
                const iSquare = document.getElementById("n"+i);
                if (iSquare.classList.contains("space")) {
                    const squareToRemove = iSquare;
                    iSquare.parentNode.removeChild(squareToRemove);
                    const newSquare = document.createElement("div");
                    document.querySelector(".wrap").appendChild(newSquare);
                    newSquare.classList.add("square");
                    newSquare.classList.add("row"+1);
                    newSquare.setAttribute("id", "n"+i);
                    if (i === 1) {
                        newSquare.style.left = "100px"; 
                    }
                    else if (i === 2) {
                        newSquare.style.left = "200px";
                    }
                    else if (i === 3) {
                        newSquare.style.left = "300px";
                    }
                    else if (i === 4) {
                        newSquare.style.left = "400px";
                    } 
                    document.getElementById("n"+i).animate([
                        {top: "-100px"}, 
                        {top: 0}
                        ], 
                        { 
                        duration: 2000,
                        fill: "forwards"
                    });
                    this.newColor = new RandomSquareColor;
                    const color = this.newColor.getRandomColor();
                    newSquare.style.backgroundColor = color;
                }
            }
            const timeoutForTesting = () => {
                this.newSpaceChecker = new SpaceChecker;
                const doSpaceChecker = this.newSpaceChecker.spaceChecker(); 
            }
            setTimeout(timeoutForTesting, 2000);
        }
        else if (space === 0) {
            console.log("no space");
            this.newCrush = new Crush;
            const doCrush = this.newCrush.upDown();
        } 
    }          
}  