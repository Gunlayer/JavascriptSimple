let game = {
    countGames: 0,
    endGame() {
        alert(`Игра окончена. Ваш счет: ${counter.count} из 5`);        
    }, 
    /* Метод позволяющий начать новую игру обнуляет счетчик правильных ответов.
    Проверяет*/
    newGame() {
        counter.count = 0;
        while (true) {
            let newGame = prompt("Хотите сьиграть еще раз? Да/Нет");
            newGame = counter.converterToLowerCase (newGame);                    
            switch (newGame) {
                case "": this.run();
                    break;
                case "да": this.run();
                    break;
                case "нет": this.endGame();
                    break;
                case null: this.endGame();
                    break;
                default: this.endGame();
            }
            if (newGame == "нет" || newGame == null) {
                break;
            }
        }

    },
    /*Метод запускающий игру прогоняет в цикле массив обьектов с вопросами*/ 
    run() {
        counter.count = 0;        
        for (let i = 0; i < riddles.length; i++) {            
            riddles[i].addLetter (); 
            let userAnswer = prompt(`${riddles[i].id} вопрос. ${riddles[i].question} Варианты ответов: ${riddles[i].answers}`);            
            if (userAnswer == null) {
                break;
            }
            userAnswer = counter.converterToLowerCase (userAnswer);            
            counter.countCorrectAnswers(userAnswer, counter.firstLetterToUpperCase (riddles[i].correctAnswer));

        }
        this.countGames++;
        this.endGame();    
    }
}
game.run();
game.newGame();