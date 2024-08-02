document.addEventListener("DOMContentLoaded", function() {
    let elements = {
      one: "1", 
      two: "2", 
      three: "3", 
      four: "4", 
      five: "5", 
      six: "6", 
      seven: "7", 
      eight: "8", 
      nine: "9", 
      zero: "0", 
      point: ".", 
      sum: "+", 
      min: "-", 
      mult: "*", 
      devide: "/"
    };
  
    let input = document.querySelector(".input2");
  
    Object.keys(elements).forEach((key) => {
      let el = document.querySelector(`.${key}`);
      if (el) {
        el.onclick = function() {
          input.value += elements[key];
        };
      }
    });
  
    let clear = document.querySelector(".clear");
    if (clear) {
      clear.onclick = function() {
        input.value = "";
      };
    }
  
    let del = document.querySelector(".del");
    if (del) {
      del.onclick = function() {
        input.value = input.value.slice(0, -1);
      };
    }
  
    let equal = document.querySelector(".equal");
    if (equal) {
      equal.onclick = function() {
        try {
          input.value = eval(input.value);
        } catch (e) {
          input.value = "Error";
        }
      };
    }
  });
  
