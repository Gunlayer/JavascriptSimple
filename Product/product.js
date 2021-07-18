"use strict";
let counter = 0;
let totalPriceArr = []; // массив куда будуд записываться цены
let counterContent = document.querySelector(".counter");
let addButton = document.querySelectorAll(".card_cart"); //ссылка на кнопку "Add to Cart"
let quantityList = {};
/**
 * Функция обработчик события при клике
 * @param {oblect} event 
 */
function clickHandler(event) {
    counter++;
    counterContent.innerText = counter;
    showCounter();    
    checkEqualTitle(getGoodTitle(event));     
    insertHTML(event); 
    document.querySelector("#total").innerText = calcTotalPrice (event, totalPriceArr);    
}
/**
 * Функция записывает в обьект quantityList сколько названий товаров с именем.
 * Mango People T-shirt 1: 2,
 * Mango People T-shirt 3: 1,
 * 
 * @param {string} title 
 */
function checkEqualTitle(title) {
    if (title in quantityList) {
        quantityList[title]++;        
    } else {
        quantityList[title] = 1;        
    }
}
/**
 * функция показывает красный кружок-маркер размер 15px если добавляется товар в корзину
 */
function showCounter() {
    if (counter > 0) {
        document.querySelector(".cart-circle").classList.add("visible")
    }
}/**
 * Функция возвращает название атрибута id карточки товаров по клику мыши
 * @param {MouseClick} event 
 * @returns {string} 
 */
function getCardId(event) {
    return event.target.closest(".container_card").closest(".card").getAttribute("id");
}
/**
 * функция принимает обьект события и возвращает название товара
 * @param {MouseClick} event
 * @returns {string} 
 */
function getGoodTitle(event) {
    return event.target.closest(".container_card").closest(".card").childNodes[1].childNodes[3].innerText;
}
/**
 * функция принимает обьект события и возвращает путь загрузки картинки товара
 * @param {MouseClick} event 
 * @returns {string}
 */
function getGoodImgURL(event) {
    return event.target.closest(".container_card").closest(".card").childNodes[1].childNodes[1].getAttribute("src");
}
/**
 * функция принимает обьект события и возвращает стоимость товара
 * @param {MouseClick} event 
 * @returns {string}
 */
function getGoodPrice(event) {    
    return event.target.closest(".container_card").closest(".card").childNodes[1].childNodes[6].innerText;
}
/**
 * функция присваивает всем карточкам ".card" атрибут со значением card0, card1 и т.д.
 */
function setGoodId () {
    let cardEl = document.querySelectorAll (".card");
    let i = 0;
    cardEl.forEach(function(item){        
        item.setAttribute("id",`card${i}`);
        i++;
    });
}

/**
 * Функция при клике выставляет разметку
 * @param {MouseClick} event 
 */

function insertHTML(event) {
    
    if (quantityList[getGoodTitle(event)]==1) {
                
        document.querySelector(".price_block").insertAdjacentHTML("beforebegin", `
    <div class="good_container">
        <img src="${getGoodImgURL(event)}" alt="good" class="cart_img_add">
        <div class="description_container">
            <div class="description_good">
                <p class="title_good">${getGoodTitle(event)}</p>
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                <p class="good_price"><span data-id="${getCardId(event)}">${quantityList[getGoodTitle(event)]}</span><span>x</span>${getGoodPrice(event)}</p>
            </div>
            <div class="cross_button_container">
                    <a href="#" class="cross_button"><i class="fas fa-times-circle"></i></a>
            </div>
        </div>
    </div>    
    `);        
    }   else {  
        document.querySelector(`span[data-id="${getCardId(event)}"]`).innerText = quantityList[getGoodTitle(event)];
    } 
} 
/**
 * Функция возвращает сумму всех элементов массива c ценой
 * @param {MouseClick} event 
 * @param {Array} arr масив цен
 * @returns {number} сумма элементов масива
 */
function calcTotalPrice (event, arr) {
    arr.push(+getGoodPrice(event));    
    let result = 0;
    for (let i=0; i<arr.length;i++) {
        result = result + arr[i];
    }
    return result;   
}

setGoodId ();
addButton.forEach(function (item) {
    item.addEventListener("click", clickHandler);
});