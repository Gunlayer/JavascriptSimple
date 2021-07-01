'use strict';
let mover = {
    getDirection() {
        const availableDirection = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = +prompt("Введите число (1,2,3,4,6,7,8 или 9), куда вы хотите переместиться, 'Отмена' для выхода");
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirection.includes(direction)) {
                alert("Для перемещиня необходимо ввести одно из чисел 1,2,3,4,6,7,8 или 9")
                continue;
            }
            return direction;
        }
    },
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        }
        if (nextPosition.x<0 || nextPosition.x >=10 || nextPosition.y<0 || nextPosition.y >=10 ) {
            alert ("Вы уперлись в стенку, ходите в другом направлении");
            nextPosition.x = player.x;
            nextPosition.y = player.y;
        }
        return nextPosition;
    }
}