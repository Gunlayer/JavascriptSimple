'use strict';
class Questions {
    constructor(id, question, answers, correctAnswer) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    addLetter() {
        if (game.countGames == 0) {
            this.answers[0] = "\n" + "A) " + this.answers[0];
            this.answers[1] = "\n" + "B) " + this.answers[1];
            this.answers[2] = "\n" + "C) " + this.answers[2];
            this.answers[3] = "\n" + "D) " + this.answers[3];
        }
    }    
}
const riddles = [
    new Questions(1, "Кто сказал мяу?", ["Собака", "Корова", "Кошка", "Петух"], "кошка"), new Questions(2, "Самая большая страна в мире?", ["США", "Россия", "Канда", "Бразилия"], "россия"),
    new Questions(3, "Сколько лап у собаки?", [1, 2, 3, 4], "4"),
    new Questions(4, "Национальная валюта Румынии?", ["Евро", "Доллар", "Форинт", "Лей"], "лей"),
    new Questions(5, "В каком годну началась ВОВ?", [1940, 1818, 1812, 1941], "1941")
]


console.log(riddles[0].answers);