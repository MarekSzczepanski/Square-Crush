class Animate {
  constructor() {

  }
  animation(square, property, start, end, time) {
    if (property === "backgroundColor" && time === "short") {
      square.animate([  
        {backgroundColor: start}, 
        {backgroundColor: end}
        ], 
        { 
        duration: 300,
        fill: "forwards"
      });
    }
    else if (property === "backgroundColor") {
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
    else if (property === "width") {
      square.animate([  
        {width: start}, 
        {width: end}
        ], 
        { 
        duration: 300,
        fill: "forwards"
      });
    }
    else if (property === "height") {
      square.animate([  
        {height: start}, 
        {height: end}
        ], 
        { 
        duration: 300,
        fill: "forwards"
      });
    }
    else if (property === "color") {
      square.animate([  
        {color: start}, 
        {color: end}
        ], 
        { 
        duration: 1000,
        iterations: Infinity,
        direction: "alternate"
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