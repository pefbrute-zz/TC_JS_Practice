var a,b,x,F;
do{
    a = prompt('Введите аргумент a', 0);
    if (isNaN(a) == true){alert('Вы ввели строку, введите число')};
}while(isNaN(a) == true);
do {
    b = prompt('Введите аргумент b, который > 0', 0);
    if(b <= 0){alert('Вы ввели аргумент, который меньше или равен 0')};
    if (isNaN(b) == true){alert('Вы ввели строку, введите число')};
} while (b <= 0 || isNaN(b) == true);
do{
    if (a < 0){
        do {
            x = prompt('Введите аргумент x большее или равное ' + abs(a), 0);
            if(x < 0 || abs(a) > x){"Вы ввели не достаточно большое число, введите число побольше"}
        }while(x < 0 || abs(a) > x);
    }else{
        do{
            x = prompt('Введите аргумент x больший -' + a/b, 0);
            if (x <= a/b * -1){alert("Неправильно введено число")};
        }while(x <= a/b * -1);
    }
    if (isNaN(x) == true){alert('Вы ввели строку, введите число')};
}while(isNaN(x) == true);
F = ((2*(8 * Math.pow(a,2) - 14 * a * b * x + 2 * Math.pow(b,2) * Math.pow(x,2))) / 15 * Math.pow(b,3)) * Math.sqrt(a + b * x);
alert('Значение функции F = ' + F);