"use strict";
function example4() {
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        }
    ];
    const productsWithPhoto = products.filter(function (product) {
        return "photos" in product && product.photos.length > 0;

    });
    products.sort (function (num1, num2){
       return num1.price - num2.price;
    });

    console.log(productsWithPhoto);
    console.log (products)
}
example4();


