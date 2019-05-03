class InitialSquares {
    constructor() {
          
    }
    initialSquares(points) {
        for (let i=24; i>-1; i--) {
            if (document.querySelector(".howToPlay").style.display = "block") {
                document.querySelector(".howToPlay").style.display = "none"; 
            }
            document.querySelector(".pointsSpan").textContent = points;
            console.log(points);
            const iSquare = document.getElementById(i);
            this.newColor = new RandomSquareColor;
            const color = this.newColor.getRandomColor();   
            iSquare.style.backgroundColor = color;
            iSquare.classList.remove("space");
            iSquare.classList.add("square");
            if (iSquare.classList.contains("row1")) {
                iSquare.style.top = 0;
            }
            else if (iSquare.classList.contains("row2")) {
                iSquare.style.top = "100px";
            }
            else if (iSquare.classList.contains("row3")) {
                iSquare.style.top = "200px";
            }
            else if (iSquare.classList.contains("row4")) {
                iSquare.style.top = "300px";
            }
            else if (iSquare.classList.contains("row5")) {
                iSquare.style.top = "400px";
            }
            if (iSquare.classList.contains("column1")) {
                iSquare.style.left = 0;
            }
            else if (iSquare.classList.contains("column2")) {
                iSquare.style.left = "100px";
            }
            else if (iSquare.classList.contains("column3")) {
                iSquare.style.left = "200px";
            }
            else if (iSquare.classList.contains("column4")) {
                iSquare.style.left = "300px";
            }
            else if (iSquare.classList.contains("column5")) {
                iSquare.style.left = "400px";
            }
        }
        const timeout = () => {
            this.newCrush = new Crush;
            const doCrush = this.newCrush.crush();
        }
        setTimeout(timeout, 1000);
    }
}

