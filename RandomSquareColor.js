class RandomSquareColor {
    constructor() {
        const arrColors = ["#FF3333", "#00CC00", "royalblue", "#CCCC00", "#BE68BE", "#C26A42"];
        let randomNumber = Math.floor((Math.random() * 6));
        this.getRandomColor = () => arrColors[randomNumber];
    }
}