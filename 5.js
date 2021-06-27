'use strict';
function example5 () {
    let i = 0;
    function count() {
        console.log (i);
        i++;
    }
    for (i;i<10;count()) {}
}
example5 ();