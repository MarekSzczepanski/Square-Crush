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
                this.newAnimate = new Animate;
                const doAnimate = this.newAnimate.animation(iSquare, "top", topNewSquare, topISquare);
                const squareToRemove = lowerSquare;
                lowerSquare.parentNode.removeChild(squareToRemove);
                iSquare.setAttribute("id", i+5);
            }
        }
    }
}