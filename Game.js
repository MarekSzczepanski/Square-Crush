class Game {
    constructor() {
        this.newAnimate = new Animate;
        const doAnimate = this.newAnimate.animation(document.querySelector(".highscoresHead"), "color", "black", "#BE68BE");
    }
    setPlayerName() {
        const start = () => {
            if (document.querySelector(".highscores1").textContent === "") {
                document.querySelector(".howToPlay").style.display = "block";
                const showTutorial = () => {
                    document.querySelector(".instruction").style.display = "block";
                    const backToMenu = () => {
                        document.querySelector(".instruction").style.display = "none";
                    }
                    document.querySelector(".instructionButton").addEventListener("mousedown", backToMenu);
                }
                document.querySelector(".howToPlay").addEventListener("mousedown", showTutorial);
            }
            else {
                document.querySelector(".howToPlay").style.display = "none"; 
            }
            document.querySelector(".startDiv").classList.add("active");
            document.querySelector(".startP").classList.add("startPActive");
            document.querySelector(".startInput").classList.add("startInputActive");
            document.querySelector(".startButton").classList.add("startButtonActive");
            document.querySelector(".startP").classList.remove("startP");
            document.querySelector(".startInput").classList.remove("startInput");
            document.querySelector(".startButton").classList.remove("startButton");
            document.querySelector(".wrap").style.backgroundColor = "silver";
            const startGame = () => {
                document.querySelector(".startButtonActive").removeEventListener("mousedown", startGame);
                document.querySelector(".startPActive").classList.add("startP");
                document.querySelector(".startInputActive").classList.add("startInput");
                document.querySelector(".startButtonActive").classList.add("startButton");
                document.querySelector(".startDiv").classList.remove("active");
                document.querySelector(".startP").classList.remove("startPActive");
                document.querySelector(".startInput").classList.remove("startInputActive");
                document.querySelector(".startButton").classList.remove("startButtonActive");
                if (document.querySelector(".startInput").value.length > 18) {
                    const nameError = document.querySelector(".nameError");
                    nameError.style.display = "block";
                    this.newAnimate = new Animate;
                    const doAnimate = this.newAnimate.animation(nameError, "backgroundColor", "transparent", "black", "short");
                    const backToStart = () => {
                        nameError.style.display = "none";
                        document.querySelector(".nameErrorButton").removeEventListener("mousedown", backToStart);
                        document.querySelector(".startInput").value = "";
                        start();
                    }
                    document.querySelector(".nameErrorButton").addEventListener("mousedown", backToStart);
                }
                else {
                    document.querySelector(".wrap").style.backgroundColor = "white";
                    this.newInitialSquares = new InitialSquares;
                    const doInitialSquares = this.newInitialSquares.initialSquares();
                }
            }
            document.querySelector(".startButtonActive").addEventListener("mousedown", startGame);
        }
        start();
    }
    noNewName() {
        this.newInitialSquares = new InitialSquares;
        const doInitialSquares = this.newInitialSquares.initialSquares();
    }
}

