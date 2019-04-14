class RandomSquareColor {
    constructor() {
        const arrColors = ["crimson", "limegreen", "mediumturquoise", "goldenrod"];
        let randomNumber = Math.floor((Math.random() * 4));
        this.getRandomColor = () => arrColors[randomNumber];
    }
}