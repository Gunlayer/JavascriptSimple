'use strict';
let renderer = {
    map:"",
    render () {
        for (let row = 0; row<config.totalRows; row++) {
            for (let col = 0; col<config.totalColums; col++) {
                if (player.y === row && player.x === col) {
                    this.map += "o "
                } else {
                    this.map += "x ";
                }                
            }
            this.map +='\n'
        }
        console.log (this.map);
    },
    clear() {
        console.clear ();
        this.map = "";
    }
};