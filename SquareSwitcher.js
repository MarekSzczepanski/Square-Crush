class SquareSwitcher {
    constructor() {

    }
    squareSwitcher(position, position2, columnOrRowNumber, columnOrRowNumber2, leftOrTop, clickedId, secondId) {
        const clickedSquare = document.getElementById(clickedId);
        const secondSquare = document.getElementById(secondId);
        if (clickedSquare.classList.contains("clicked")) {
            if (leftOrTop === "left") {
                this.newAnimate = new Animate;
                const doAnimate = this.newAnimate.squareAnimation(clickedSquare, "left", position2, position);
                const doAnimate2 = this.newAnimate.squareAnimation(secondSquare, "left", position, position2);
            }
            else if (leftOrTop === "top") {
                this.newAnimate = new Animate;
                const doAnimate = this.newAnimate.squareAnimation(clickedSquare, "top", position2, position);
                const doAnimate2 = this.newAnimate.squareAnimation(secondSquare, "top", position, position2);
            }
            clickedSquare.classList.remove(columnOrRowNumber);
            clickedSquare.classList.add(columnOrRowNumber2);
            secondSquare.classList.remove(columnOrRowNumber2);
            secondSquare.classList.add(columnOrRowNumber);
            clickedSquare.id = secondId;
            secondSquare.id = clickedId;
            clickedSquare.classList.remove("clicked");
            console.log("moved");  
        }  
    }
}