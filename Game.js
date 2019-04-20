class Game {
    constructor() {
       this.newSpaceChecker = new InitialSquares;
       const doSquareGoDown = this.newSpaceChecker.initialSquares();
       this.newCrush = new Crush;
       const doCrush = this.newCrush.upDown();
    }
}
new Game;
