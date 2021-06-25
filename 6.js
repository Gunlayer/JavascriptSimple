"use strict"
let value = prompt("Сколько рублей вы хотите положить на счёт?");
let lastChar = value.charAt(value.length - 1);
let prevLastChar = value.charAt(value.length - 2);
if (prevLastChar == "1") {
    alert(`Ваша сумма в ${value} рублей успешно зачислена.`);
} else {
    switch (lastChar) {
        case "0": alert(`Ваша сумма в ${value} рублей успешно зачислена.`);
            break;
        case "1": alert(`Ваша сумма в ${value} рубль успешно зачислена.`);
            break;
        case "2": ;
        case "3": ;
        case "4": alert(`Ваша сумма в ${value} рубля успешно зачислена.`);
            break;
        default: alert(`Ваша сумма в ${value} рублей успешно зачислена.`);
    }
}
