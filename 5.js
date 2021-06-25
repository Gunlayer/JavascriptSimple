'use strict';
/**
 * 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "addition" : alert (addition (arg1, arg2));
        break;
        case "subtraction" : alert (subtraction (arg1, arg2));
        break;
        case "multiplication" : alert (multiplication (arg1, arg2));
        break;
        case "division" : alert (division (arg1, arg2));
        break;
    }
}
let arg1 = +prompt ("Enter 1 number");
let arg2 = +prompt ("Enter 2 number");
let operation = prompt ("What would you like to do? addition? subtraction? multiplication? division?")
mathOperation (arg1, arg2, operation)