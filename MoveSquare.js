class MoveSquare {
    constructor() {
    }
    moveSquare() {
        let clickTarget;
        const moveCheck = (e) => {
            let clickedFlag = 0;
            for (let i=0; i<25; i++) {
                if (document.getElementById("n"+i).classList.contains("clicked")) {
                    clickedFlag = 1;
                    i = 25;
                }
            }
            if (clickedFlag === 0) {
                e.target.classList.add("clicked");
                console.log("clicked");
                clickTarget = e.target;
            }
        }
        const move = (e) => {
            if (
            e.keyCode === 37 && clickTarget.classList.contains("column2") 
            || e.keyCode === 37 && clickTarget.classList.contains("column3") 
            || e.keyCode === 37 && clickTarget.classList.contains("column4") 
            || e.keyCode === 37 && clickTarget.classList.contains("column5")) { //left arrow
                for (let i=0; i<25; i++) {
                    if (clickTarget.classList.contains("clicked")) { 
                        if (clickTarget.style.left === "100px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher(0, "100px", "column2", "column1", "left", "n"+i, "n"+(i-1)); 
                        }
                        else if (clickTarget.style.left === "200px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("100px", "200px", "column3", "column2", "left", "n"+i, "n"+(i-1)); 
                        }
                        else if (clickTarget.style.left === "300px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("200px", "300px", "column4", "column3", "left", "n"+i, "n"+(i-1)); 
                        } 
                        else {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("300px", "400px", "column5", "column4", "left", "n"+i, "n"+(i-1));
                        }  
                    }
                } 
            }
            else if (
            e.keyCode === 38 && clickTarget.classList.contains("row2") 
            || e.keyCode === 38 && clickTarget.classList.contains("row3") 
            || e.keyCode === 38 && clickTarget.classList.contains("row4") 
            || e.keyCode === 38 && clickTarget.classList.contains("row5")) { //up arrow
                for (let i=0; i<25; i++) {
                    if (clickTarget.classList.contains("clicked")) { 
                        if (clickTarget.style.top === "100px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher(0, "100px", "row2", "row1", "top", "n"+i, "n"+(i-5));
                        }
                        else if (clickTarget.style.top === "200px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("100px", "200px", "row3", "row2", "top", "n"+i, "n"+(i-5)); 
                        }
                        else if (clickTarget.style.top === "300px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("200px", "300px", "row4", "row3", "top", "n"+i, "n"+(i-5)); 
                        } 
                        else {
                        this.newSquareSwitcher = new SquareSwitcher;
                        const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("300px", "400px", "row5", "row4", "top", "n"+i, "n"+(i-5));
                        }  
                    }
                }    
            }
            else if (
            e.keyCode === 39 && clickTarget.classList.contains("column1") 
            || e.keyCode === 39 && clickTarget.classList.contains("column2") 
            || e.keyCode === 39 && clickTarget.classList.contains("column3") 
            || e.keyCode === 39 && clickTarget.classList.contains("column4")) { //right arrow
                for (let i=0; i<25; i++) {
                    if (clickTarget.classList.contains("clicked")) { 
                        if (clickTarget.style.left === "100px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("200px", "100px", "column2", "column3", "left", "n"+i, "n"+(i+1)); 
                        }
                        else if (clickTarget.style.left === "200px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("300px", "200px", "column3", "column4", "left", "n"+i, "n"+(i+1)); 
                        } 
                        else if (clickTarget.style.left === "300px"){
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("400px", "300px", "column4", "column5", "left", "n"+i, "n"+(i+1));
                        }
                        else {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("100px", 0, "column1", "column2", "left", "n"+i, "n"+(i+1)); 
                        }  
                    }
                }
            }
            else if (
            e.keyCode === 40 && clickTarget.classList.contains("row1") 
            || e.keyCode === 40 && clickTarget.classList.contains("row2") 
            || e.keyCode === 40 && clickTarget.classList.contains("row3") 
            || e.keyCode === 40 && clickTarget.classList.contains("row4")) { //down arrow
                for (let i=0; i<25; i++) {
                    if (clickTarget.classList.contains("clicked")) { 
                        if (clickTarget.style.top === "100px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("200px", "100px", "row2", "row3", "top", "n"+i, "n"+(i+5)); 
                        }
                        else if (clickTarget.style.top === "200px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("300px", "200px", "row3", "row4", "top", "n"+i, "n"+(i+5)); 
                        } 
                        else if (clickTarget.style.top === "300px") {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("400px", "300px", "row4", "row5", "top", "n"+i, "n"+(i+5));
                        }
                        else {
                            this.newSquareSwitcher = new SquareSwitcher;
                            const doSquareSwitcher = this.newSquareSwitcher.squareSwitcher("100px", 0, "row1", "row2", "top", "n"+i, "n"+(i+5));
                        }  
                    }
                }
            } 
        }
        document.querySelector("div").addEventListener("click", moveCheck);
        window.addEventListener("keydown", move);
    }
}