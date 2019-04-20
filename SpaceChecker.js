class SpaceChecker {
    constructor() {  
    }
    
    squareGoDown() {
        for (let i=24; i>-1; i--) {
            const iSquare = document.getElementById("n"+i);
            const lowerSquare = document.getElementById("n"+(i+5));
            const squareSpaceShift = () => {
                iSquare.classList.remove("square");
                iSquare.classList.add("space");
            }
            const spaceSquareShift = () => {
                lowerSquare.classList.remove("space");
                lowerSquare.classList.add("square");
            }
            if (i<20) {
                const lowerSquare = document.getElementById("n"+(i+5));
                this.newColor = new RandomSquareColor;
                const color = this.newColor.getRandomColor();
                lowerSquare.style.backgroundColor = color;
                squareSpaceShift();
                spaceSquareShift();
            } 
            if (i<5 && iSquare.classList.contains("space")) {
                iSquare.style.top = 0;
                this.newColor = new RandomSquareColor;
                const color = this.newColor.getRandomColor();
                iSquare.style.backgroundColor = color;
                iSquare.classList.remove("space");
                iSquare.classList.add("square");
            }
        }
    }
    goDownAfterCrush() {
        for (let i=15; i<20; i++) {
            /* document.getElementById("n"+(i+5)).classList.add("space");
            document.getElementById("n"+(i+5)).classList.remove("square"); */
            if (document.getElementById("n"+i).classList.contains("square")
            && document.getElementById("n"+(i+5)).classList.contains("space")) {
                document.getElementById("n"+i).style.top = "400px";
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("space");
                newSquare.setAttribute("id", "n"+i);
                newSquare.style.top = "300px";
                if (i === 16) {
                    document.getElementById("n"+i).style.left = "100px";
                    newSquare.style.left = "100px";
                }
                else if (i === 17) {
                    document.getElementById("n"+i).style.left = "200px";
                    newSquare.style.left = "200px";
                }
                else if (i === 18) {
                    document.getElementById("n"+i).style.left = "300px";
                    newSquare.style.left = "300px";
                }
                else if (i === 19) {
                    document.getElementById("n"+i).style.left = "400px";
                    newSquare.style.left = "400px";
                }
                document.getElementById("n"+(i+5)).classList.add("square");
                document.getElementById("n"+(i+5)).classList.remove("space");
                document.getElementById("n"+i).animate([
                    {top: "300px"}, 
                    {top: "400px"}
                  ], 
                  { 
                    duration: 3000,
                    fill: "forwards"
                });
                const squareToRemove = document.getElementById("n"+(i+5));
                document.getElementById("n"+(i+5)).parentNode.removeChild(squareToRemove);
                document.getElementById("n"+i).setAttribute("id", "n"+(i+5));
            }
        }
        for (let i=10; i<15; i++) {
            /* document.getElementById("n"+(i+5)).classList.add("space");
            document.getElementById("n"+(i+5)).classList.remove("square"); */
            if (document.getElementById("n"+i).classList.contains("square")
            && document.getElementById("n"+(i+5)).classList.contains("space")) {
                document.getElementById("n"+i).style.top = "300px";
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("space");
                newSquare.setAttribute("id", "n"+i);
                newSquare.style.top = "200px";
                if (i === 11) {
                    document.getElementById("n"+i).style.left = "100px";
                    newSquare.style.left = "100px";
                }
                else if (i === 12) {
                    document.getElementById("n"+i).style.left = "200px";
                    newSquare.style.left = "200px";
                }
                else if (i === 13) {
                    document.getElementById("n"+i).style.left = "300px";
                    newSquare.style.left = "300px";
                }
                else if (i === 14) {
                    document.getElementById("n"+i).style.left = "400px";
                    newSquare.style.left = "400px";
                }
                document.getElementById("n"+(i+5)).classList.add("square");
                document.getElementById("n"+(i+5)).classList.remove("space");
                document.getElementById("n"+i).animate([
                    {top: "200px"}, 
                    {top: "300px"}
                  ], 
                  { 
                    duration: 6000,
                    fill: "forwards"
                });
                const squareToRemove = document.getElementById("n"+(i+5));
                document.getElementById("n"+(i+5)).parentNode.removeChild(squareToRemove);
                document.getElementById("n"+i).setAttribute("id", "n"+(i+5));
            }
        }
        for (let i=5; i<10; i++) {
            /* document.getElementById("n"+(i+5)).classList.add("space");
            document.getElementById("n"+(i+5)).classList.remove("square"); */
            if (document.getElementById("n"+i).classList.contains("square")
            && document.getElementById("n"+(i+5)).classList.contains("space")) {
                document.getElementById("n"+i).style.top = "200px";
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("space");
                newSquare.setAttribute("id", "n"+i);
                newSquare.style.top = "100px";
                if (i === 6) {
                    document.getElementById("n"+i).style.left = "100px";
                    newSquare.style.left = "100px";
                }
                else if (i === 7) {
                    document.getElementById("n"+i).style.left = "200px";
                    newSquare.style.left = "200px";
                }
                else if (i === 8) {
                    document.getElementById("n"+i).style.left = "300px";
                    newSquare.style.left = "300px";
                }
                else if (i === 8) {
                    document.getElementById("n"+i).style.left = "400px";
                    newSquare.style.left = "400px";
                }
                document.getElementById("n"+(i+5)).classList.add("square");
                document.getElementById("n"+(i+5)).classList.remove("space");
                document.getElementById("n"+i).animate([
                    {top: "100px"}, 
                    {top: "200px"}
                  ], 
                  { 
                    duration: 6000,
                    fill: "forwards"
                });
                const squareToRemove = document.getElementById("n"+(i+5));
                document.getElementById("n"+(i+5)).parentNode.removeChild(squareToRemove);
                document.getElementById("n"+i).setAttribute("id", "n"+(i+5));
            }
        }
        for (let i=0; i<5; i++) {
            /* document.getElementById("n"+(i+5)).classList.add("space");
            document.getElementById("n"+(i+5)).classList.remove("square"); */
            if (document.getElementById("n"+i).classList.contains("square")
            && document.getElementById("n"+(i+5)).classList.contains("space")) {
                document.getElementById("n"+i).style.top = "100px";
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("space");
                newSquare.setAttribute("id", "n"+i);
                newSquare.style.top = 0;
                if (i === 1) {
                    document.getElementById("n"+i).style.left = "100px";
                    newSquare.style.left = "100px";
                }
                else if (i === 2) {
                    document.getElementById("n"+i).style.left = "200px";
                    newSquare.style.left = "200px";
                }
                else if (i === 3) {
                    document.getElementById("n"+i).style.left = "300px";
                    newSquare.style.left = "300px";
                }
                else if (i === 4) {
                    document.getElementById("n"+i).style.left = "400px";
                    newSquare.style.left = "400px";
                }
                document.getElementById("n"+(i+5)).classList.add("square");
                document.getElementById("n"+(i+5)).classList.remove("space");
                document.getElementById("n"+i).animate([
                    {top: 0}, 
                    {top: "100px"}
                  ], 
                  { 
                    duration: 6000,
                    fill: "forwards"
                });
                const squareToRemove = document.getElementById("n"+(i+5));
                document.getElementById("n"+(i+5)).parentNode.removeChild(squareToRemove);
                document.getElementById("n"+i).setAttribute("id", "n"+(i+5));
            }
        }
        for (let i=0; i<5; i++) {
            /* document.getElementById("n"+(i+5)).classList.add("space");
            document.getElementById("n"+(i+5)).classList.remove("square"); */
            if (document.getElementById("n"+i).classList.contains("space")) {
                const squareToRemove = document.getElementById("n"+i);
                document.getElementById("n"+i).parentNode.removeChild(squareToRemove);
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("square");
                newSquare.setAttribute("id", "n"+i);
                newSquare.style.top = 0;
                if (i === 1) {
                    newSquare.style.left = "100px"; 
                }
                else if (i === 2) {
                    newSquare.style.left = "200px";
                }
                else if (i === 3) {
                    newSquare.style.left = "300px";
                }
                else if (i === 4) {
                    newSquare.style.left = "400px";
                } 
                document.getElementById("n"+i).animate([
                    {top: "-100px"}, 
                    {top: 0}
                  ], 
                  { 
                    duration: 6000,
                    fill: "forwards"
                });
                this.newColor = new RandomSquareColor;
                const color = this.newColor.getRandomColor();
                document.getElementById("n"+i).animate([
                    /* This function prevents getting color of fall destination space instead of falling square */
                    {backgroundColor: "white"}, 
                    {backgroundColor: color}
                  ], 
                  { 
                    duration: 0,
                    fill: "forwards"
                });
            }
        }
    }
}            /* for(let i=15; i<20; i++) {
                    document.getElementById("n"+(i+5)).classList.add("space");
                    if (i<20 && i>14 && document.getElementById("n"+i).classList.contains("square")
                    && document.getElementById("n"+(i+5)).classList.contains("space")) {
                        document.getElementById("n"+i).style.top = "400px";
                        const newSquare = document.createElement("div");
                        document.querySelector(".wrap").appendChild(newSquare);
                        newSquare.classList.add("space");
                        newSquare.setAttribute("id", i);
                        newSquare.style.top = "300px";    
                        if (i === 16) {
                            newSquare.style.left = "100px";
                        }
                        else if (i === 17) {
                            newSquare.style.left = "200px";
                        }
                        else if (i === 18) {
                            newSquare.style.left = "300px";
                        }
                        else if (i === 19) {
                            newSquare.style.left = "400px";
                        }
                        /* document.getElementById("n"+i).setAttribute("id", i+5); */
                        /*  const squareToRemove = document.getElementById("n"+(i+5));
                        document.getElementById("n"+(i+5)).parentNode.removeChild(squareToRemove); */
                        
                        
                   

 