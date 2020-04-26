function calcF() {
    var a, b, x, F;
    do {
        a = prompt('Введите аргумент a, который больше или равен 0', 2)
        if (isNaN(a) == true) { alert('Вы ввели строку, введите число') }
        if (a < 0) { alert('Вы ввели аргумент, который < 0') }
    } while (isNaN(a) == true || a < 0)
    do {
        b = prompt('Введите аргумент b, который > 0', 3);
        if (b <= 0) { alert('Вы ввели аргумент, который меньше или равен 0') }
        if (isNaN(b) == true) { alert('Вы ввели строку, введите число') }
    } while (b <= 0 || isNaN(b) == true)
    do {
        x = prompt('Введите аргумент x большее или равное 0', -2);
        if (x < 0) { "Вы ввели x < 0" }
        if (isNaN(x) == true) { alert('Вы ввели строку, введите число') }
    } while (isNaN(x) == true || x < 0)
    F = ((2 * (8 * Math.pow(a, 2) - 14 * a * b * x + 2 * Math.pow(b, 2) * Math.pow(x, 2))) / 15 * Math.pow(b, 3)) * Math.sqrt(a + b * x);
    alert('Значение функции F = ' + F);
}