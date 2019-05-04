class Animate {
  constructor() {

  }
  animation(square, property, start, end, time, iterations, direction) {
    square.animate([{ [property]: start }, { [property]: end }], {
      duration: time || 1000,
      fill: "forwards",
      iterations: iterations,
      direction: direction
    });
  }
}