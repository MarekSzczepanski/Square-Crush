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
                    if (squareToFix.classList.contains("row1") && squareToFix.style.top !== 0) {
                        squareToFix.style.top = 0;
                    }
                    else if (squareToFix.classList.contains("row2") && squareToFix.style.top !== "100px") {
                        squareToFix.style.top = "100px";
                    }
                    else if (squareToFix.classList.contains("row3") && squareToFix.style.top !== "200px") {
                        squareToFix.style.top = "200px";
                    }
                    else if (squareToFix.classList.contains("row4") && squareToFix.style.top !== "300px") {
                        squareToFix.style.top = "300px";
                    }
                    else if (squareToFix.classList.contains("row5") && squareToFix.style.top !== "400px") {
                        squareToFix.style.top = "400px";
                    }
                }
                for (let i=0; i<25; i++) { //bugfixing loop
                    const squareToFix = document.getElementById(i)
                    if (squareToFix.classList.contains("column1") && squareToFix.style.left !== 0) {
                        squareToFix.style.left = 0;
                    }
                    else if (squareToFix.classList.contains("column2") && squareToFix.style.left !== "100px") {
                        squareToFix.style.left = "100px";
                    }
                    else if (squareToFix.classList.contains("column3") && squareToFix.style.left !== "200px") {
                        squareToFix.style.left = "200px";
                    }
                    else if (squareToFix.classList.contains("column4") && squareToFix.style.left !== "300px") {
                        squareToFix.style.left = "300px";
                    }
                    else if (squareToFix.classList.contains("column5") && squareToFix.style.left !== "400px") {
                        squareToFix.style.left = "400px";
                    }
                }
                if (
                e.keyCode === 37 && clickTarget.classList.contains("column2") 
                || e.keyCode === 37 && clickTarget.classList.contains("column3") 
                || e.keyCode === 37 && clickTarget.classList.contains("column4") 
                || e.keyCode === 37 && clickTarget.classList.contains("column5")) { //left arrow
                    if (clickTarget.classList.contains("clicked")) { 
                        if (clickTarget.style.left === "100px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher(0, "100px", "column2", "column1", "left", clickTarget.id, clickTarget.id-1);
                        }
                        else if (clickTarget.style.left === "200px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("100px", "200px", "column3", "column2", "left", clickTarget.id, clickTarget.id-1);
                        }
                        else if (clickTarget.style.left === "300px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("200px", "300px", "column4", "column3", "left", clickTarget.id, clickTarget.id-1);
                        } 
                        else {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("300px", "400px", "column5", "column4", "left", clickTarget.id, clickTarget.id-1);
                        }  
                    }
                }
                else if (
                e.keyCode === 38 && clickTarget.classList.contains("row2") 
                || e.keyCode === 38 && clickTarget.classList.contains("row3") 
                || e.keyCode === 38 && clickTarget.classList.contains("row4") 
                || e.keyCode === 38 && clickTarget.classList.contains("row5")) { //up arrow
                    if (clickTarget.classList.contains("clicked")) { 
                        if (clickTarget.style.top === "100px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher(0, "100px", "row2", "row1", "top", clickTarget.id, clickTarget.id-5);
                        }
                        else if (clickTarget.style.top === "200px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("100px", "200px", "row3", "row2", "top", clickTarget.id, clickTarget.id-5);
                        }
                        else if (clickTarget.style.top === "300px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("200px", "300px", "row4", "row3", "top", clickTarget.id, clickTarget.id-5);
                        } 
                        else {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("300px", "400px", "row5", "row4", "top", clickTarget.id, clickTarget.id-5);
                        }  
                    }   
                }
                else if (
                e.keyCode === 39 && clickTarget.classList.contains("column1") 
                || e.keyCode === 39 && clickTarget.classList.contains("column2") 
                || e.keyCode === 39 && clickTarget.classList.contains("column3") 
                || e.keyCode === 39 && clickTarget.classList.contains("column4")) { //right arrow
                    if (clickTarget.classList.contains("clicked")) { 
                        if (clickTarget.style.left === "100px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("200px", "100px", "column2", "column3", "left", clickTarget.id, clickTarget.id-(-1)); 
                        }
                        else if (clickTarget.style.left === "200px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("300px", "200px", "column3", "column4", "left", clickTarget.id, clickTarget.id-(-1)); 
                        } 
                        else if (clickTarget.style.left === "300px"){
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("400px", "300px", "column4", "column5", "left", clickTarget.id, clickTarget.id-(-1));
                        }
                        else {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("100px", 0, "column1", "column2", "left", clickTarget.id, clickTarget.id-(-1)); 
                        }  
                    }
                }
                else if (
                e.keyCode === 40 && clickTarget.classList.contains("row1") 
                || e.keyCode === 40 && clickTarget.classList.contains("row2") 
                || e.keyCode === 40 && clickTarget.classList.contains("row3") 
                || e.keyCode === 40 && clickTarget.classList.contains("row4")) { //down arrow
                    if (clickTarget.classList.contains("clicked")) { 
                        if (clickTarget.style.top === "100px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("200px", "100px", "row2", "row3", "top", clickTarget.id, clickTarget.id-(-5)); 
                        }
                        else if (clickTarget.style.top === "200px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("300px", "200px", "row3", "row4", "top", clickTarget.id, clickTarget.id-(-5)); 
                        } 
                        else if (clickTarget.style.top === "300px") {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("400px", "300px", "row4", "row5", "top", clickTarget.id, clickTarget.id-(-5));
                        }
                        else {
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("100px", 0, "row1", "row2", "top", clickTarget.id, clickTarget.id-(-5));
                        }  
                    }
                }
                else {
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