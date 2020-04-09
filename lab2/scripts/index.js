var a,b,x,F;
a = prompt('Введите аргумент a', 0);
do {
    b = prompt('Введите аргумент b, который > 0', 0);
    if(b <= 0){alert('Введённый аргумент меньше или равен 0')};    
} while (b <= 0);
x = prompt('Введите аргумент x', 0);
F = ((2*(8 * Math.pow(a,2) - 14 * a * b * x + 2 * Math.pow(b,2) * Math.pow(x,2))) / 15 * Math.pow(b,3)) * Math.sqrt(a + b * x);
alert('Значение функции F = ' + F);