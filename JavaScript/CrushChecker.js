class CrushChecker {
    constructor() {

    }
    crushChecker() {
        let crush = 0;
        const arrAllSquares = [];
        let rowNumber = 0;
        let forRowNumber = 0;
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
            const check = (iNumber, secondSquareI, thirdSquareI, columnOrRow, number, secondNumber, thirdNumber) => {
                if (i<iNumber && 
                    squareColor === arrAllSquares[i+secondSquareI].style.backgroundColor 
                    && squareColor === arrAllSquares[i+thirdSquareI].style.backgroundColor 
                    && arrAllSquares[i].classList.contains(columnOrRow + number) 
                    && arrAllSquares[i+secondSquareI].classList.contains(columnOrRow + (number + secondNumber)) 
                    && arrAllSquares[i+thirdSquareI].classList.contains(columnOrRow + (number + thirdNumber))) {
                    crush = 1;
                    return;
                }
            }
            check(10, 10, 15, "column", columnNumber, 0, 0);
            check(10, 5, 15, "column", columnNumber, 0, 0);
            check(22, 1, 3, "row", rowNumber, 0, 0);
            check(22, 2, 3, "row", rowNumber, 0, 0);
            check(18, 6, 7, "row", rowNumber, 1, 1);
            check(18, 6, 2, "row", rowNumber, 1, 0);
            check(20, 3, 4, "row", rowNumber, 1, 1);
            check(18, 1, 7, "row", rowNumber, 0, 1);
            check(19, 4, 6, "row", rowNumber, 1, 1);
            check(19, 1, 4, "row", rowNumber, 0, 1);
            check(14, 5, 11, "column", columnNumber, 0, 1); 
            check(14, 6, 11, "column", columnNumber, 1, 1);
            check(14, 6, 10, "column", columnNumber, 1, 0);
            check(15, 4, 10, "column", columnNumber, -1, 0);
            check(15, 4, 9, "column", columnNumber, -1, -1);
            check(15, 5, 9, "column", columnNumber, 0, -1);
        }
        if (crush === 0) {
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