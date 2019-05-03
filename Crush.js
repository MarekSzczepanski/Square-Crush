class Crush {
  constructor() {      
  }
  crush(switchCheck) {
    const arrAllSquares = [];
    let crush = 0;
    let rowNumber;
    for (let i=0; i<25; i++) {
      arrAllSquares.push(document.getElementById(i));
    }
    for (let i=0; i<25; i++) {
      if (i<6) {
        rowNumber = 1;
      }
      else if (i<11) {
        rowNumber = 2;
      }
      else if (i<16) {
        rowNumber = 3;
      }
      else if (i<21) {
        rowNumber = 4;
      }
      else if (i<25) {
        rowNumber = 5;
      }
      if (i<15 && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+5].style.backgroundColor && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+10].style.backgroundColor) { 
        this.newAnimate = new Animate;
        const doAnimate = this.newAnimate.animation(arrAllSquares[i], "backgroundColor", document.getElementById(i).style.backgroundColor, "white");
        const doAnimate2 = this.newAnimate.animation(arrAllSquares[i+5], "backgroundColor", document.getElementById(i).style.backgroundColor, "white");
        const doAnimate3 = this.newAnimate.animation(arrAllSquares[i+10], "backgroundColor", document.getElementById(i).style.backgroundColor, "white");
        const doBorderAnimate = this.newAnimate.animation(arrAllSquares[i], "border", "solid black 1px", "solid white 1px"); 
        const doBorderAnimate2 = this.newAnimate.animation(arrAllSquares[i+5], "border", "solid black 1px", "solid white 1px");
        const doBorderAnimate3 = this.newAnimate.animation(arrAllSquares[i+10], "border", "solid black 1px", "solid white 1px");
        arrAllSquares[i].classList.remove("square");
        arrAllSquares[i].classList.add("space");
        arrAllSquares[i+5].classList.remove("square");
        arrAllSquares[i+5].classList.add("space");
        arrAllSquares[i+10].classList.remove("square");
        arrAllSquares[i+10].classList.add("space");
        crush = 1;
      }
      if (i>0 && i<24 && arrAllSquares[i].style.backgroundColor === arrAllSquares[i-1].style.backgroundColor && arrAllSquares[i].style.backgroundColor === arrAllSquares[i+1].style.backgroundColor && arrAllSquares[i].classList.contains("row"+rowNumber) && arrAllSquares[i-1].classList.contains("row"+rowNumber) && arrAllSquares[i+1].classList.contains("row"+rowNumber)) {
        this.newAnimate = new Animate;
        const doAnimate = this.newAnimate.animation(arrAllSquares[i], "backgroundColor", document.getElementById(i).style.backgroundColor, "white");
        const doAnimate2 = this.newAnimate.animation(arrAllSquares[i-1], "backgroundColor", document.getElementById(i).style.backgroundColor, "white");
        const doAnimate3 = this.newAnimate.animation(arrAllSquares[i+1], "backgroundColor", document.getElementById(i).style.backgroundColor, "white");
        const doBorderAnimate = this.newAnimate.animation(arrAllSquares[i], "border", "solid black 1px", "solid white 1px"); 
        const doBorderAnimate2 = this.newAnimate.animation(arrAllSquares[i-1], "border", "solid black 1px", "solid white 1px");
        const doBorderAnimate3 = this.newAnimate.animation(arrAllSquares[i+1], "border", "solid black 1px", "solid white 1px");
        arrAllSquares[i].classList.remove("square");
        arrAllSquares[i].classList.add("space");
        arrAllSquares[i-1].classList.remove("square");
        arrAllSquares[i-1].classList.add("space");
        arrAllSquares[i+1].classList.remove("square");
        arrAllSquares[i+1].classList.add("space");
        crush = 1;
      }
    }
    if (crush === 1) {
      for (let i=0; i<25; i++) {
        if (document.getElementById(i).classList.contains("move")) {
          document.getElementById(i).classList.remove("move");
        }
        else if (document.getElementById(i).classList.contains("move2")) {
          document.getElementById(i).classList.remove("move2");
        }
      }
      this.newSpaceChecker = new SpaceChecker;
      const doSpaceChecker = this.newSpaceChecker.spaceChecker();
    }  
    else if (document.querySelector(".movesSpan").textContent === "0") {
      document.querySelector(".gameOver").classList.add("active");
      document.querySelector(".gameOver").style.display = "block";
        const newGameStart = (e) => {
          document.querySelector(".gameOver").classList.remove("active");
          document.querySelector(".gameOver").style.display = "none";
          document.querySelector(".movesSpan").textContent = "30";
          document.querySelector(".volume").style.display = "";
          document.querySelector(".mute").style.display = "block";
          let score = parseInt(document.querySelector(".pointsSpan").textContent, 10);
          const highscores = () => {
            const playerName = document.querySelector("input").value+": ";
            if (score > parseInt(document.querySelector(".highscores"+1).textContent, 10) || document.querySelector(".highscores"+1).textContent === "") {
              document.querySelector(".highscores"+10).textContent = document.querySelector(".highscores"+9).textContent;
              document.querySelector(".highscores"+9).textContent = document.querySelector(".highscores"+8).textContent;
              document.querySelector(".highscores"+8).textContent = document.querySelector(".highscores"+7).textContent;
              document.querySelector(".highscores"+7).textContent = document.querySelector(".highscores"+6).textContent;
              document.querySelector(".highscores"+6).textContent = document.querySelector(".highscores"+5).textContent;
              document.querySelector(".highscores"+5).textContent = document.querySelector(".highscores"+4
              ).textContent;
              document.querySelector(".highscores"+4).textContent = document.querySelector(".highscores"+3).textContent;
              document.querySelector(".highscores"+3).textContent = document.querySelector(".highscores"+2).textContent;
              document.querySelector(".highscores"+2).textContent = document.querySelector(".highscores"+1).textContent;
              document.querySelector(".highscores"+1).textContent = score;
              document.querySelector(".playerName"+10).textContent = document.querySelector(".playerName"+9).textContent;
              document.querySelector(".playerName"+9).textContent = document.querySelector(".playerName"+8).textContent;
              document.querySelector(".playerName"+8).textContent = document.querySelector(".playerName"+7).textContent;
              document.querySelector(".playerName"+7).textContent = document.querySelector(".playerName"+6).textContent;
              document.querySelector(".playerName"+6).textContent = document.querySelector(".playerName"+5).textContent;
              document.querySelector(".playerName"+5).textContent = document.querySelector(".playerName"+4).textContent;
              document.querySelector(".playerName"+4).textContent = document.querySelector(".playerName"+3).textContent;
              document.querySelector(".playerName"+3).textContent = document.querySelector(".playerName"+2).textContent;
              document.querySelector(".playerName"+2).textContent = document.querySelector(".playerName"+1).textContent;
              document.querySelector(".playerName"+1).textContent = playerName;
            }
            else if (score > parseInt(document.querySelector(".highscores"+2).textContent, 10) || document.querySelector(".highscores"+2).textContent === "") {
              document.querySelector(".highscores"+10).textContent = document.querySelector(".highscores"+9).textContent;
              document.querySelector(".highscores"+9).textContent = document.querySelector(".highscores"+8).textContent;
              document.querySelector(".highscores"+8).textContent = document.querySelector(".highscores"+7).textContent;
              document.querySelector(".highscores"+7).textContent = document.querySelector(".highscores"+6).textContent;
              document.querySelector(".highscores"+6).textContent = document.querySelector(".highscores"+5).textContent;
              document.querySelector(".highscores"+5).textContent = document.querySelector(".highscores"+4
              ).textContent;
              document.querySelector(".highscores"+4).textContent = document.querySelector(".highscores"+3).textContent;
              document.querySelector(".highscores"+3).textContent = document.querySelector(".highscores"+2).textContent;
              document.querySelector(".highscores"+2).textContent = score;
              document.querySelector(".playerName"+10).textContent = document.querySelector(".playerName"+9).textContent;
              document.querySelector(".playerName"+9).textContent = document.querySelector(".playerName"+8).textContent;
              document.querySelector(".playerName"+8).textContent = document.querySelector(".playerName"+7).textContent;
              document.querySelector(".playerName"+7).textContent = document.querySelector(".playerName"+6).textContent;
              document.querySelector(".playerName"+6).textContent = document.querySelector(".playerName"+5).textContent;
              document.querySelector(".playerName"+5).textContent = document.querySelector(".playerName"+4).textContent;
              document.querySelector(".playerName"+4).textContent = document.querySelector(".playerName"+3).textContent;
              document.querySelector(".playerName"+3).textContent = document.querySelector(".playerName"+2).textContent;
              document.querySelector(".playerName"+2).textContent = playerName;
            }
            else if (score > parseInt(document.querySelector(".highscores"+3).textContent, 10) || document.querySelector(".highscores"+3).textContent === "") {
              document.querySelector(".highscores"+10).textContent = document.querySelector(".highscores"+9).textContent;
              document.querySelector(".highscores"+9).textContent = document.querySelector(".highscores"+8).textContent;
              document.querySelector(".highscores"+8).textContent = document.querySelector(".highscores"+7).textContent;
              document.querySelector(".highscores"+7).textContent = document.querySelector(".highscores"+6).textContent;
              document.querySelector(".highscores"+6).textContent = document.querySelector(".highscores"+5).textContent;
              document.querySelector(".highscores"+5).textContent = document.querySelector(".highscores"+4
              ).textContent;
              document.querySelector(".highscores"+4).textContent = document.querySelector(".highscores"+3).textContent;
              document.querySelector(".highscores"+3).textContent = score;
              document.querySelector(".playerName"+10).textContent = document.querySelector(".playerName"+9).textContent;
              document.querySelector(".playerName"+9).textContent = document.querySelector(".playerName"+8).textContent;
              document.querySelector(".playerName"+8).textContent = document.querySelector(".playerName"+7).textContent;
              document.querySelector(".playerName"+7).textContent = document.querySelector(".playerName"+6).textContent;
              document.querySelector(".playerName"+6).textContent = document.querySelector(".playerName"+5).textContent;
              document.querySelector(".playerName"+5).textContent = document.querySelector(".playerName"+4).textContent;
              document.querySelector(".playerName"+4).textContent = document.querySelector(".playerName"+3).textContent;
              document.querySelector(".playerName"+3).textContent = playerName;
            }
            else if (score > parseInt(document.querySelector(".highscores"+4).textContent, 10) || document.querySelector(".highscores"+4).textContent === "") {
              document.querySelector(".highscores"+10).textContent = document.querySelector(".highscores"+9).textContent;
              document.querySelector(".highscores"+9).textContent = document.querySelector(".highscores"+8).textContent;
              document.querySelector(".highscores"+8).textContent = document.querySelector(".highscores"+7).textContent;
              document.querySelector(".highscores"+7).textContent = document.querySelector(".highscores"+6).textContent;
              document.querySelector(".highscores"+6).textContent = document.querySelector(".highscores"+5).textContent;
              document.querySelector(".highscores"+5).textContent = document.querySelector(".highscores"+4
              ).textContent;
              document.querySelector(".highscores"+4).textContent = score;
              document.querySelector(".playerName"+10).textContent = document.querySelector(".playerName"+9).textContent;
              document.querySelector(".playerName"+9).textContent = document.querySelector(".playerName"+8).textContent;
              document.querySelector(".playerName"+8).textContent = document.querySelector(".playerName"+7).textContent;
              document.querySelector(".playerName"+7).textContent = document.querySelector(".playerName"+6).textContent;
              document.querySelector(".playerName"+6).textContent = document.querySelector(".playerName"+5).textContent;
              document.querySelector(".playerName"+5).textContent = document.querySelector(".playerName"+4).textContent;
              document.querySelector(".playerName"+4).textContent = playerName;
            }
            else if (score > parseInt(document.querySelector(".highscores"+5).textContent, 10) || document.querySelector(".highscores"+5).textContent === "") {
              document.querySelector(".highscores"+10).textContent = document.querySelector(".highscores"+9).textContent;
              document.querySelector(".highscores"+9).textContent = document.querySelector(".highscores"+8).textContent;
              document.querySelector(".highscores"+8).textContent = document.querySelector(".highscores"+7).textContent;
              document.querySelector(".highscores"+7).textContent = document.querySelector(".highscores"+6).textContent;
              document.querySelector(".highscores"+6).textContent = document.querySelector(".highscores"+5).textContent;
              document.querySelector(".highscores"+5).textContent = score;
              document.querySelector(".playerName"+10).textContent = document.querySelector(".playerName"+9).textContent;
              document.querySelector(".playerName"+9).textContent = document.querySelector(".playerName"+8).textContent;
              document.querySelector(".playerName"+8).textContent = document.querySelector(".playerName"+7).textContent;
              document.querySelector(".playerName"+7).textContent = document.querySelector(".playerName"+6).textContent;
              document.querySelector(".playerName"+6).textContent = document.querySelector(".playerName"+5).textContent;
              document.querySelector(".playerName"+5).textContent = playerName;
            }
            else if (score > parseInt(document.querySelector(".highscores"+6).textContent, 10) || document.querySelector(".highscores"+6).textContent === "") {
              document.querySelector(".highscores"+10).textContent = document.querySelector(".highscores"+9).textContent;
              document.querySelector(".highscores"+9).textContent = document.querySelector(".highscores"+8).textContent;
              document.querySelector(".highscores"+8).textContent = document.querySelector(".highscores"+7).textContent;
              document.querySelector(".highscores"+7).textContent = document.querySelector(".highscores"+6).textContent;
              document.querySelector(".highscores"+6).textContent = score;
              document.querySelector(".playerName"+10).textContent = document.querySelector(".playerName"+9).textContent;
              document.querySelector(".playerName"+9).textContent = document.querySelector(".playerName"+8).textContent;
              document.querySelector(".playerName"+8).textContent = document.querySelector(".playerName"+7).textContent;
              document.querySelector(".playerName"+7).textContent = document.querySelector(".playerName"+6).textContent;
              document.querySelector(".playerName"+6).textContent = playerName;
            }
            else if (score > parseInt(document.querySelector(".highscores"+7).textContent, 10) || document.querySelector(".highscores"+7).textContent === "") {
              document.querySelector(".highscores"+10).textContent = document.querySelector(".highscores"+9).textContent;
              document.querySelector(".highscores"+9).textContent = document.querySelector(".highscores"+8).textContent;
              document.querySelector(".highscores"+8).textContent = document.querySelector(".highscores"+7).textContent;
              document.querySelector(".highscores"+7).textContent = score;
              document.querySelector(".playerName"+10).textContent = document.querySelector(".playerName"+9).textContent;
              document.querySelector(".playerName"+9).textContent = document.querySelector(".playerName"+8).textContent;
              document.querySelector(".playerName"+8).textContent = document.querySelector(".playerName"+7).textContent;
              document.querySelector(".playerName"+7).textContent = playerName;
            }
            else if (score > parseInt(document.querySelector(".highscores"+8).textContent, 10) || document.querySelector(".highscores"+8).textContent === "") {
              document.querySelector(".highscores"+10).textContent = document.querySelector(".highscores"+9).textContent;
              document.querySelector(".highscores"+9).textContent = document.querySelector(".highscores"+8).textContent;
              document.querySelector(".highscores"+8).textContent = score;
              document.querySelector(".playerName"+10).textContent = document.querySelector(".playerName"+9).textContent;
              document.querySelector(".playerName"+9).textContent = document.querySelector(".playerName"+8).textContent;
              document.querySelector(".playerName"+8).textContent = playerName;
            }
            else if (score > parseInt(document.querySelector(".highscores"+9).textContent, 10) || document.querySelector(".highscores"+9).textContent === "") {
              document.querySelector(".highscores"+10).textContent = document.querySelector(".highscores"+9).textContent;
              document.querySelector(".highscores"+9).textContent = score;
              document.querySelector(".playerName"+10).textContent = document.querySelector(".playerName"+9).textContent;
              document.querySelector(".playerName"+9).textContent = playerName;
            }
            else if (score > parseInt(document.querySelector(".highscores"+10).textContent, 10) || document.querySelector(".highscores"+10).textContent === "") {
              document.querySelector(".highscores"+10).textContent = score;
              document.querySelector(".playerName"+10).textContent = playerName;
            }
          }
          highscores();
          document.querySelector(".pointsSpan").textContent = "0";
          this.newGame = new Game;
          if (e.target.classList.contains("changePlayer")) {
            const doGame = this.newGame.setPlayerName();
          }
          else {
            const doGame = this.newGame.noNewName();
          }
          document.querySelector(".newGame").removeEventListener("mousedown", newGameStart);
          document.querySelector(".changePlayer").removeEventListener("mousedown", newGameStart);
        }
      document.querySelector(".changePlayer").addEventListener("mousedown", newGameStart);
      document.querySelector(".newGame").addEventListener("mousedown", newGameStart);
      return;
    } 
    else if (crush === 0 && switchCheck === "switched") {
      this.newWrongSwitch = new WrongSwitch;
      const doWrongSwitch = this.newWrongSwitch.wrongSwitch();
    }
    else if (crush === 0) {
      console.log("no crush");
      this.newCrushChecker = new CrushChecker;
      const doCrushChecker = this.newCrushChecker.crushChecker();
    }
  }
}