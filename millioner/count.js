const counter = {
    count: 0,

    countCorrectAnswers (userAnswer, correctAnswer) {
        
        if (userAnswer == correctAnswer) {
            this.count++;
            alert ("Это правильный ответ");
        } else {
            alert (`Это не правильный ответ. Правильный ответ ${correctAnswer}`)
        }
    },
    converterToLowerCase (str) {
        if (str != null) {
            str = str.toLowerCase();
        }
        return str; 
    },
    firstLetterToUpperCase (str) {
        str = str.split ('');
        str[0] = str[0].toUpperCase ();
        str = str.join('');  
        return str
    }    
}
