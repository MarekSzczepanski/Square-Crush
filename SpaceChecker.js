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
            const newSquaresAfterCrush = (iFor, iFor2, topISquare, topNewSquare) => {
                for (let i=iFor; i<iFor2; i++) {
                    const iSquare = document.getElementById("n"+i);
                    const lowerSquare = document.getElementById("n"+(i+5));
                    if (iSquare.classList.contains("square")
                    && lowerSquare.classList.contains("space")) {
                        iSquare.style.top = topISquare;
                        const newSquare = document.createElement("div");
                        document.querySelector(".wrap").appendChild(newSquare);
                        newSquare.classList.add("space");
                        newSquare.setAttribute("id", "n"+i);
                        newSquare.style.top = topNewSquare;
                        if (i === iFor2 - 4) {
                            iSquare.style.left = "100px";
                            newSquare.style.left = "100px";
                        }
                        else if (i === iFor2 - 3) {
                            iSquare.style.left = "200px";
                            newSquare.style.left = "200px";
                        }
                        else if (i === iFor2 - 2) {
                            iSquare.style.left = "300px";
                            newSquare.style.left = "300px";
                        }
                        else if (i === iFor2 - 1) {
                            iSquare.style.left = "400px";
                            newSquare.style.left = "400px";
                        }
                        lowerSquare.classList.add("square");
                        lowerSquare.classList.add("block");
                        lowerSquare.classList.remove("space");
                        iSquare.animate([
                            {top: topNewSquare}, 
                            {top: topISquare}
                            ], 
                            { 
                            duration: 2000,
                            fill: "forwards"
                        });
                        const squareToRemove = lowerSquare;
                        lowerSquare.parentNode.removeChild(squareToRemove);
                        iSquare.setAttribute("id", "n"+(i+5));
                    }
                }
            }
            newSquaresAfterCrush(15, 20, "400px", "300px");
            newSquaresAfterCrush(10, 15, "300px", "200px");
            newSquaresAfterCrush(5, 10, "200px", "100px");
            newSquaresAfterCrush(0, 5, "100px", 0);
            for (let i=0; i<5; i++) {
                const iSquare = document.getElementById("n"+i);
                if (iSquare.classList.contains("space")) {
                    const squareToRemove = iSquare;
                    iSquare.parentNode.removeChild(squareToRemove);
                    const newSquare = document.createElement("div");
                    document.querySelector(".wrap").appendChild(newSquare);
                    newSquare.classList.add("square");
                    newSquare.classList.add("block");
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