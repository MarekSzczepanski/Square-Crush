class InitialSquares {
    constructor() {
          
    }
    initialSquares(points) {
        for (let i=24; i>-1; i--) {
            if (document.querySelector(".howToPlay").style.display = "block") {
                document.querySelector(".howToPlay").style.display = "none"; 
            }
            document.querySelector(".pointsSpan").textContent = points;
            const iSquare = document.getElementById(i);
            this.newColor = new RandomSquareColor;
            const color = this.newColor.getRandomColor();   
            iSquare.style.backgroundColor = color;
            iSquare.classList.remove("space");
            iSquare.classList.add("square");
            let position = 0;
            for (let i=1; i<6; i++) {
                if (iSquare.classList.contains("row"+i)) {
                    iSquare.style.top = position + "px";
                }
                if (iSquare.classList.contains("column"+i)) {
                    iSquare.style.left = position + "px";
                }
                position += 100;
            }
        }
        const timeout = () => {
            this.newCrush = new Crush;
            const doCrush = this.newCrush.crush();
        }
        setTimeout(timeout, 1000);
    }
}

