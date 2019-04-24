class RandomSquareColor {
    constructor() {
        const arrColors = ["crimson", "limegreen", "mediumturquoise", "goldenrod", "mediumorchid"];
        let randomNumber = Math.floor((Math.random() * 5));
        this.getRandomColor = () => arrColors[randomNumber];
    }
}