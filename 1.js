function example1() {

    for (let i = 0; i <= 10; i++) {
        if (i == 0) {
            console.log(i + " - это ноль");
        }
        if ((i % 2) != 0) {
            console.log(i + " - нечетное число");
        }
        if ((i > 0) && ((i % 2) == 0)) {
            console.log(i + " - четное число");
        }
    }
}
example1();
