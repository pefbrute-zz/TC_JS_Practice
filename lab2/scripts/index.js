function convert(){
  var key;
  do {
    key = prompt("Перевести киллометры в мили?(0)\n"
              + "Перевести мили в киллометры?(1)", 0);
    key = parseInt(key);
    if (key != 0 && key != 1){alert('Неправильно введено число')};
    if (isNaN(key) == true){alert('Вы ввели строку, введите число')};
  }while(key != 0 && key != 1 || isNaN(key) == true);
  switch (key) {
    case 0:
      do{
        key = prompt('Сколько киллометров перевести в мили?', 3);
        if (isNaN(key) == true){alert('Вы ввели строку, введите число')};
      }while(isNaN(key) == true);
      alert('В ' + key + ' километров ' + key * 0.62137 + ' миль');
      break;
    case 1:
      do{
        key = prompt('Сколько миль перевести в киллометры?', 4);
        if (isNaN(key) == true){alert('Вы ввели строку, введите число')};
      }while(isNaN(key) == true);
      alert('В ' + key + ' миль ' + key * 1.60934 + ' киллометров')
      break;
  }
}