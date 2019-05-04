class NewSquaresAfterCrush {
    constructor() {
    }
    newSquaresAfterCrush(iFor, iFor2, topISquare, topNewSquare, rowNumber) {
        for (let i=iFor; i<iFor2; i++) {
            const iSquare = document.getElementById(i);
            const lowerSquare = document.getElementById(i+5);
            if (iSquare.classList.contains("square")
            && lowerSquare.classList.contains("space")) {
                iSquare.style.top = topISquare;
                iSquare.classList.remove("row"+rowNumber);
                iSquare.classList.add("row"+(rowNumber+1));
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("space");
                newSquare.setAttribute("id", i);
                newSquare.style.top = topNewSquare;
                let squareLeft = 100;
                for (let j=4; j>0; j--) {
                    if (i === iFor2 - j) {
                        iSquare.style.left = squareLeft + "px";
                        newSquare.style.left = squareLeft + "px";
                    }
                    squareLeft += 100;
                }
                this.newAnimate = new Animate;
                const doAnimate = this.newAnimate.animation(iSquare, "top", topNewSquare, topISquare);
                const squareToRemove = lowerSquare;
                lowerSquare.parentNode.removeChild(squareToRemove);
                iSquare.setAttribute("id", i+5);
            }
        }
    }
}