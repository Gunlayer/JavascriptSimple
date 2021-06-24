"use strict"
function example3 () {
    let a = 10;
    let b = -4;
    let result = null;
    if (a>=0 && b >= 0) {
        result = a - b;        
    }
    if (a<0 && b<0) {
        result = a * b;        
    }
    if ((a<0 && b>=0) || (a>=0 && b<0)) {
        result = a + b;
    }
    alert (result);
}
example3 ()