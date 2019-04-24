class Animate {
    constructor() {

    }
    squareAnimation(square, property, start, end) {
        if (property === "backgroundColor") {
            square.animate([  
              {backgroundColor: start}, 
              {backgroundColor: end}
              ], 
              { 
              duration: 2000,
              fill: "forwards"
            });
        }
        else if (property === "left") {
            square.animate([  
              {left: start}, 
              {left: end}
              ], 
              { 
              duration: 2000,
              fill: "forwards"
            });
        }
        else {
            square.animate([  
              {top: start}, 
              {top: end}
              ], 
              { 
              duration: 2000,
              fill: "forwards"
            });
        }
    }
}