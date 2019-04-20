class Game {
    constructor() {
       this.newSpaceChecker = new SpaceChecker;
       const doSquareGoDown = this.newSpaceChecker.squareGoDown();
       this.newCrush = new Crush;
       const doCrush = this.newCrush.upDown();
    }
}
new Game;
