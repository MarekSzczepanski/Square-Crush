class KeyChecker {
    constructor() {
    }
    keyChecker(wrongButton) {
        let clickTarget;
        if (wrongButton !== "") { //bugfix of random keyboard smashing and clicking
            for (let i=0; i<25; i++) {
                if (document.getElementById(i).classList.contains("clicked")) {
                    document.getElementById(i).classList.remove("clicked");
                }
            }
        }
        const clickedCheck = (e) => {
            document.querySelector("div").removeEventListener("mousedown", clickedCheck);
            let clickedFlag = 0; // avoid multiple click targets
            for (let i=0; i<25; i++) {
                if (document.getElementById(i).classList.contains("clicked")) {
                    clickedFlag = 1;
                    i = 25;
                }
            }
            if (clickedFlag === 0) {
                if (e.target.classList.contains("square")) {
                    e.target.classList.add("clicked");
                }
                else {
                    this.newKeyChecker = new KeyChecker;
                    const doKeyChecker = this.newKeyChecker.keyChecker();
                }
            }
            clickTarget = e.target;
        }  
        const keyCheck = (e) => {
            this.newSquareSwitcher = new SquareSwitcher;
            if (clickTarget !== undefined) {
                window.removeEventListener("keydown", keyCheck);
                for (let i=0; i<25; i++) { //bugfixing loop
                    const squareToFix = document.getElementById(i)
                    let position = 0;
                    for (let j=1; j<6; j++) {
                        if (squareToFix.classList.contains("row"+j) && squareToFix.style.top !== position + "px") {
                            squareToFix.style.top = position + "px";
                        }
                        if (squareToFix.classList.contains("column"+j) && squareToFix.style.left !== position + "px") {
                            squareToFix.style.left = position + "px";
                        }
                        position += 100;
                    }
                }
                const check = (key, columnOrRow, columnOrRowNumber, leftOrTop, plusOrMinus, leftOrTop2, secondId, loopNumber, loopNumber2) => {
                    if (
                    e.keyCode === key && clickTarget.classList.contains(columnOrRow+columnOrRowNumber) 
                    || e.keyCode === key && clickTarget.classList.contains(columnOrRow+(columnOrRowNumber+1)) 
                    || e.keyCode === key && clickTarget.classList.contains(columnOrRow+(columnOrRowNumber+2)) 
                    || e.keyCode === key && clickTarget.classList.contains(columnOrRow+(columnOrRowNumber+3))) {
                        if (clickTarget.classList.contains("clicked")) {
                            let columnOrRowNumber = 1;
                            for (let i=loopNumber; i<loopNumber2; i+=100) {
                                if (key === 37 && leftOrTop === i+"px" || key === 38 && leftOrTop === i+"px") {
                                    const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher(i+plusOrMinus+"px", i+"px", columnOrRow + (columnOrRowNumber+1), columnOrRow + columnOrRowNumber, leftOrTop2, clickTarget.id, secondId);
                                    i = 500;
                                }
                                else if (key === 39 && leftOrTop === i+"px" || key === 40 && leftOrTop === i+"px") {
                                    const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher(i+plusOrMinus+"px", i+"px", columnOrRow + columnOrRowNumber, columnOrRow + (columnOrRowNumber+1), leftOrTop2, clickTarget.id, secondId);
                                    i = 500;
                                }
                                columnOrRowNumber++; 
                            }
                        }
                    }
                }
                check(37, "column", 2, clickTarget.style.left, -100, "left", clickTarget.id-1, 100, 500);
                check(38, "row", 2, clickTarget.style.top, -100, "top", clickTarget.id-5, 100, 500);
                check(39, "column", 1, clickTarget.style.left, 100, "left", clickTarget.id-(-1), 0, 400);
                check(40, "row", 1, clickTarget.style.top, 100, "top", clickTarget.id-(-5), 0, 400);
                if (e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40) {
                    this.newAnimate = new Animate;
                    const doAnimate = this.newAnimate.animation(document.querySelector(".wrongButton"), "backgroundColor", "transparent", "black");
                    document.querySelector(".wrongButton").style.display = "block";
                    const wrongButtonErrorDisappear = () => {
                        const doAnimate2 = this.newAnimate.animation(document.querySelector(".wrongButton"), "backgroundColor", "black", "transparent");
                        const textDisappear = () => {
                            document.querySelector(".wrongButton").style.display = "none";
                        }
                        setTimeout(textDisappear, 600);
                    }
                    setTimeout(wrongButtonErrorDisappear, 1000);
                    this.newKeyChecker = new KeyChecker;
                    const doKeyChecker = this.newKeyChecker.keyChecker(document.querySelector(".clicked"));
                    return;
                }
            }
        }
        document.querySelector("div").addEventListener("mousedown", clickedCheck);
        window.addEventListener("keydown", keyCheck);
    }
}