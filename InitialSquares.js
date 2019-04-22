class InitialSquares {
    constructor() {
          
    }
    initialSquares() {
        for (let i=24; i>-1; i--) {
            const iSquare = document.getElementById("n"+i);
            this.newColor = new RandomSquareColor;
            const color = this.newColor.getRandomColor();   
            iSquare.style.backgroundColor = color;
            iSquare.classList.remove("space");
            iSquare.classList.add("square");
        }
        const timeout = () => {
        this.newCrush = new Crush;
        const doCrush = this.newCrush.upDown();
        }
        setTimeout(timeout, 2000);
    }
}

