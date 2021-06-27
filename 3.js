"use strict"
function example3() {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];
    products.forEach (function (products) {
        products.price = products.price - products.price /100*15;
        console.log (products);
    })
}
example3()