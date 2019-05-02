class CrushChecker {
    constructor() {

    }
    crushChecker() {
        let crush = 0;
        const arrAllSquares = [];
        let rowNumber;
        let columnNumber;
        for (let i=0; i<25; i++) {
            arrAllSquares.push(document.getElementById(i));
        }
        for (let i=0; i<25; i++) {
            let square = document.getElementById(i);
            let squareColor = document.getElementById(i).style.backgroundColor;
            if (i<5) {
                rowNumber = 1;
            }
            else if (i<10) {
                rowNumber = 2;
            }
            else if (i<15) {
                rowNumber = 3;
            }
            else if (i<20) {
                rowNumber = 4;
            }
            else if (i<25) {
                rowNumber = 5;
            }
            if (i===0 || i===5 || i===10 || i===15 || i===20) {
                columnNumber = 1;
            }
            else if (i===1 || i===6 || i===11 || i===16 || i===21) {
                columnNumber = 2;
            }
            else if (i===2 || i===7 || i===12 || i===17 || i===22) {
                columnNumber = 3;
            }
            else if (i===3 || i===8 || i===13 || i===18 || i===23) {
                columnNumber = 4;
            }
            else if (i===4 || i===9 || i===14 || i===19 || i===24) {
                columnNumber = 5;
            }
            if (
                i<10 
                && squareColor === arrAllSquares[i+10].style.backgroundColor 
                && squareColor === arrAllSquares[i+15].style.backgroundColor
                || i<10 
                && squareColor === arrAllSquares[i+5].style.backgroundColor 
                && squareColor === arrAllSquares[i+15].style.backgroundColor
                || i<22 && 
                squareColor === arrAllSquares[i+1].style.backgroundColor 
                && squareColor === arrAllSquares[i+3].style.backgroundColor 
                && arrAllSquares[i].classList.contains("row"+rowNumber) 
                && arrAllSquares[i+1].classList.contains("row"+rowNumber) 
                && arrAllSquares[i+3].classList.contains("row"+rowNumber) 
                || i<22 
                && squareColor === arrAllSquares[i+2].style.backgroundColor 
                && squareColor === arrAllSquares[i+3].style.backgroundColor 
                && arrAllSquares[i].classList.contains("row"+rowNumber) 
                && arrAllSquares[i+2].classList.contains("row"+rowNumber) 
                && arrAllSquares[i+3].classList.contains("row"+rowNumber)
                || i<18
                && squareColor === arrAllSquares[i+6].style.backgroundColor 
                && squareColor === arrAllSquares[i+7].style.backgroundColor 
                && arrAllSquares[i].classList.contains("row"+rowNumber) 
                && arrAllSquares[i+6].classList.contains("row"+(rowNumber+1)) 
                && arrAllSquares[i+7].classList.contains("row"+(rowNumber+1))
                || i<18
                && squareColor === arrAllSquares[i+6].style.backgroundColor 
                && squareColor === arrAllSquares[i+2].style.backgroundColor 
                && arrAllSquares[i].classList.contains("row"+rowNumber) 
                && arrAllSquares[i+6].classList.contains("row"+(rowNumber+1)) 
                && arrAllSquares[i+2].classList.contains("row"+rowNumber)
                || i<20
                && squareColor === arrAllSquares[i+3].style.backgroundColor 
                && squareColor === arrAllSquares[i+4].style.backgroundColor 
                && arrAllSquares[i].classList.contains("row"+rowNumber) 
                && arrAllSquares[i+3].classList.contains("row"+(rowNumber+1))
                && arrAllSquares[i+4].classList.contains("row"+(rowNumber+1))
                || i<18
                && squareColor === arrAllSquares[i+1].style.backgroundColor 
                && squareColor === arrAllSquares[i+7].style.backgroundColor 
                && arrAllSquares[i].classList.contains("row"+rowNumber) 
                && arrAllSquares[i+1].classList.contains("row"+rowNumber) 
                && arrAllSquares[i+7].classList.contains("row"+(rowNumber+1)) 
                || i<19
                && squareColor === arrAllSquares[i+4].style.backgroundColor
                && squareColor === arrAllSquares[i+6].style.backgroundColor
                && arrAllSquares[i].classList.contains("row"+rowNumber)
                && arrAllSquares[i+4].classList.contains("row"+(rowNumber+1))
                && arrAllSquares[i+6].classList.contains("row"+(rowNumber+1))
                || i<19
                && squareColor === arrAllSquares[i+1].style.backgroundColor
                && squareColor === arrAllSquares[i+4].style.backgroundColor
                && arrAllSquares[i].classList.contains("row"+rowNumber)
                && arrAllSquares[i+1].classList.contains("row"+rowNumber)
                && arrAllSquares[i+4].classList.contains("row"+(rowNumber+1)) 
                || i<14
                && squareColor === arrAllSquares[i+5].style.backgroundColor
                && squareColor === arrAllSquares[i+11].style.backgroundColor
                && arrAllSquares[i].classList.contains("column"+columnNumber)
                && arrAllSquares[i+5].classList.contains("column"+columnNumber)
                && arrAllSquares[i+11].classList.contains("column"+(columnNumber+1))
                || i<14
                && squareColor === arrAllSquares[i+6].style.backgroundColor
                && squareColor === arrAllSquares[i+11].style.backgroundColor
                && arrAllSquares[i].classList.contains("column"+columnNumber)
                && arrAllSquares[i+6].classList.contains("column"+(columnNumber+1))
                && arrAllSquares[i+11].classList.contains("column"+(columnNumber+1))
                || i<14
                && squareColor === arrAllSquares[i+6].style.backgroundColor
                && squareColor === arrAllSquares[i+10].style.backgroundColor
                && arrAllSquares[i].classList.contains("column"+columnNumber)
                && arrAllSquares[i+6].classList.contains("column"+(columnNumber+1))
                && arrAllSquares[i+10].classList.contains("column"+columnNumber)
                || i<15
                && squareColor === arrAllSquares[i+4].style.backgroundColor
                && squareColor === arrAllSquares[i+10].style.backgroundColor
                && arrAllSquares[i].classList.contains("column"+columnNumber)
                && arrAllSquares[i+4].classList.contains("column"+(columnNumber-1))
                && arrAllSquares[i+10].classList.contains("column"+columnNumber)
                || i<15
                && squareColor === arrAllSquares[i+4].style.backgroundColor
                && squareColor === arrAllSquares[i+9].style.backgroundColor
                && arrAllSquares[i].classList.contains("column"+columnNumber)
                && arrAllSquares[i+4].classList.contains("column"+(columnNumber-1))
                && arrAllSquares[i+9].classList.contains("column"+(columnNumber-1))
                || i<15
                && squareColor === arrAllSquares[i+5].style.backgroundColor
                && squareColor === arrAllSquares[i+9].style.backgroundColor
                && arrAllSquares[i].classList.contains("column"+columnNumber)
                && arrAllSquares[i+5].classList.contains("column"+columnNumber)
                && arrAllSquares[i+9].classList.contains("column"+(columnNumber-1))
                ) {
                crush = 1;
            }
        }
        if (crush === 0) {
            console.log("randomize");
            document.querySelector(".infoDiv").classList.add("active");
            document.querySelector(".info").style.display = "block";
            const randomize = () => {
            this.newInitialSquares = new InitialSquares;
            const doInitialSquares = this.newInitialSquares.initialSquares(document.querySelector(".pointsSpan").textContent);
            document.querySelector(".wrap").removeEventListener("mousedown", randomize);
            document.querySelector(".infoDiv").classList.remove("active");
            document.querySelector("p").style.display = "none";     
            }
            document.querySelector(".wrap").addEventListener("mousedown", randomize);
        }
        else {
            this.newKeyChecker = new KeyChecker;
            const doKeyChecker = this.newKeyChecker.keyChecker();
        } 
    }
}