class SpaceChecker {
    constructor() {  
    }
    goDownAfterCrush() {
        for (let i=15; i<20; i++) {
            const iSquare = document.getElementById("n"+i);
            const lowerSquare = document.getElementById("n"+(i+5));
            if (iSquare.classList.contains("square")
            && lowerSquare.classList.contains("space")) {
                iSquare.style.top = "400px";
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("space");
                newSquare.setAttribute("id", "n"+i);
                newSquare.style.top = "300px";
                if (i === 16) {
                    iSquare.style.left = "100px";
                    newSquare.style.left = "100px";
                }
                else if (i === 17) {
                    iSquare.style.left = "200px";
                    newSquare.style.left = "200px";
                }
                else if (i === 18) {
                    iSquare.style.left = "300px";
                    newSquare.style.left = "300px";
                }
                else if (i === 19) {
                    iSquare.style.left = "400px";
                    newSquare.style.left = "400px";
                }
                lowerSquare.classList.add("square");
                lowerSquare.classList.remove("space");
                iSquare.animate([
                    {top: "300px"}, 
                    {top: "400px"}
                  ], 
                  { 
                    duration: 3000,
                    fill: "forwards"
                });
                const squareToRemove = lowerSquare;
                lowerSquare.parentNode.removeChild(squareToRemove);
                iSquare.setAttribute("id", "n"+(i+5));
            }
        }
        for (let i=10; i<15; i++) {
            const iSquare = document.getElementById("n"+i);
            const lowerSquare = document.getElementById("n"+(i+5));
            if (iSquare.classList.contains("square")
            && lowerSquare.classList.contains("space")) {
                iSquare.style.top = "300px";
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("space");
                newSquare.setAttribute("id", "n"+i);
                newSquare.style.top = "200px";
                if (i === 11) {
                    iSquare.style.left = "100px";
                    newSquare.style.left = "100px";
                }
                else if (i === 12) {
                    iSquare.style.left = "200px";
                    newSquare.style.left = "200px";
                }
                else if (i === 13) {
                    iSquare.style.left = "300px";
                    newSquare.style.left = "300px";
                }
                else if (i === 14) {
                    iSquare.style.left = "400px";
                    newSquare.style.left = "400px";
                }
                lowerSquare.classList.add("square");
                lowerSquare.classList.remove("space");
                iSquare.animate([
                    {top: "200px"}, 
                    {top: "300px"}
                  ], 
                  { 
                    duration: 6000,
                    fill: "forwards"
                });
                const squareToRemove = lowerSquare;
                lowerSquare.parentNode.removeChild(squareToRemove);
                iSquare.setAttribute("id", "n"+(i+5));
            }
        }
        for (let i=5; i<10; i++) {
            const iSquare = document.getElementById("n"+i);
            const lowerSquare = document.getElementById("n"+(i+5));
            if (iSquare.classList.contains("square")
            && lowerSquare.classList.contains("space")) {
                iSquare.style.top = "200px";
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("space");
                newSquare.setAttribute("id", "n"+i);
                newSquare.style.top = "100px";
                if (i === 6) {
                    iSquare.style.left = "100px";
                    newSquare.style.left = "100px";
                }
                else if (i === 7) {
                    iSquare.style.left = "200px";
                    newSquare.style.left = "200px";
                }
                else if (i === 8) {
                    iSquare.style.left = "300px";
                    newSquare.style.left = "300px";
                }
                else if (i === 8) {
                    iSquare.style.left = "400px";
                    newSquare.style.left = "400px";
                }
                lowerSquare.classList.add("square");
                lowerSquare.classList.remove("space");
                iSquare.animate([
                    {top: "100px"}, 
                    {top: "200px"}
                  ], 
                  { 
                    duration: 6000,
                    fill: "forwards"
                });
                const squareToRemove = lowerSquare;
                lowerSquare.parentNode.removeChild(squareToRemove);
                iSquare.setAttribute("id", "n"+(i+5));
            }
        }
        for (let i=0; i<5; i++) {
            const iSquare = document.getElementById("n"+i);
            const lowerSquare = document.getElementById("n"+(i+5));
            if (iSquare.classList.contains("square")
            && lowerSquare.classList.contains("space")) {
                iSquare.style.top = "100px";
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("space");
                newSquare.setAttribute("id", "n"+i);
                if (i === 1) {
                    iSquare.style.left = "100px";
                    newSquare.style.left = "100px";
                }
                else if (i === 2) {
                    iSquare.style.left = "200px";
                    newSquare.style.left = "200px";
                }
                else if (i === 3) {
                    iSquare.style.left = "300px";
                    newSquare.style.left = "300px";
                }
                else if (i === 4) {
                    iSquare.style.left = "400px";
                    newSquare.style.left = "400px";
                }
                lowerSquare.classList.add("square");
                lowerSquare.classList.remove("space");
                iSquare.animate([
                    {top: 0}, 
                    {top: "100px"}
                  ], 
                  { 
                    duration: 6000,
                    fill: "forwards"
                });
                const squareToRemove = lowerSquare;
                lowerSquare.parentNode.removeChild(squareToRemove);
                iSquare.setAttribute("id", "n"+(i+5));
            }
        }
        for (let i=0; i<5; i++) {
            const iSquare = document.getElementById("n"+i);
            if (iSquare.classList.contains("space")) {
                const squareToRemove = iSquare;
                iSquare.parentNode.removeChild(squareToRemove);
                const newSquare = document.createElement("div");
                document.querySelector(".wrap").appendChild(newSquare);
                newSquare.classList.add("square");
                newSquare.setAttribute("id", "n"+i);
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
                    /* This function prevents coloring fall destination space instead of falling square */
                    /* ISquare variable doesn't work, probably because of two animate methods used in this loop. */
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
}
                        
                        
                   

 