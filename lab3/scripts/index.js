var x1,x2,dx,y,table;
do {
  x1 = prompt('Введите число x1', 0);
  if (isNaN(x1) == true){alert('Вы ввели строку, введите число')};
}while(isNaN(x1) == true);
do {
  x2 = prompt('Введите число x2 не равное ' + x1, 0);
  if (x1 == x2){alert('Вы ввели x2 равное ' + x1)};
  if (isNaN(x2) == true){alert('Вы ввели строку, введите число')};
}while(isNaN(x2) == true);
do {
  if (x1 < x2){
    do{
      dx = prompt('Введите число dx > 0', 0);
    }while(dx < 0);
  }else{
    do{
      dx = prompt('Введите число dx < 0', 0);
    }while(dx > 0);
  };
  if (isNaN(dx) == true){alert('Вы ввели строку, введите число')};
}while(isNaN(dx) == true);
table = 'x1 ' + ' Значение\n';
alert(table);
if (x1 < x2){
  for (x1; x1 < x2; x1 = x1 + dx){
    if (cos(x1) == 0){
      table = table + x1 + '  - \n';
      continue;
    };
    y = (x1-5)/Math.cos(x1);
    table.push(table + x1 + '  ' + y);
  }
}
alert(table);