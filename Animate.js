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
              duration: 1000,
              fill: "forwards"
            });
        }
        else if (property === "border") {
          square.animate([  
            {border: start}, 
            {border: end}
            ], 
            { 
            duration: 1000,
            fill: "forwards"
          });
      }
        else if (property === "left") {
            square.animate([  
              {left: start}, 
              {left: end}
              ], 
              { 
              duration: 1000,
              fill: "forwards"
            });
        }
        else if (property === "top") {
            square.animate([  
              {top: start}, 
              {top: end}
              ], 
              { 
              duration: 1000,
              fill: "forwards"
            });
        }
    }
}