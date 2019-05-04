class SquareSwitcher {
    constructor() {
    }
    squareSwitcher(position, position2, columnOrRowNumber, columnOrRowNumber2, leftOrTop, clickedId, secondId) {
        let moves = document.querySelector(".movesSpan").textContent;
        const clickedSquare = document.getElementById(clickedId);
        const secondSquare = document.getElementById(secondId);
        if (clickedSquare.classList.contains("clicked")) {
            clickedSquare.classList.remove("clicked");
            if (leftOrTop === "left") {
                this.newAnimate = new Animate;
                const doAnimate = this.newAnimate.animation(clickedSquare, "left", position2, position);
                const doAnimate2 = this.newAnimate.animation(secondSquare, "left", position, position2);
            }
            else if (leftOrTop === "top") {
                this.newAnimate = new Animate;
                const doAnimate = this.newAnimate.animation(clickedSquare, "top", position2, position);
                const doAnimate2 = this.newAnimate.animation(secondSquare, "top", position, position2);
            }
            secondSquare.id = clickedId;
            clickedSquare.id = secondId;
            clickedSquare.classList.remove(columnOrRowNumber);
            clickedSquare.classList.add(columnOrRowNumber2);
            secondSquare.classList.remove(columnOrRowNumber2);
            secondSquare.classList.add(columnOrRowNumber);
            clickedSquare.classList.add("move");
            secondSquare.classList.add("move2");
            const crushTimeout = () => {
                this.newCrush = new Crush;
                const doCrush = this.newCrush.crush("switched");
                moves--;
                document.querySelector(".movesSpan").textContent = moves;
            }
            setTimeout(crushTimeout, 1000);
        }  
    }
}
