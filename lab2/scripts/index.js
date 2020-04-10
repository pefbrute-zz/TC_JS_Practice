var key;
do {
  key = prompt("Перевести киллометры в мили?(0)\n"
            + "Перевести мили в киллометры?(1)",0);
  if (key < '0' || key > '1'){alert('Неправильно введено число')};
}while(key < '0' || key > '1');
switch (key) {
    case '0':
      do{
        key = prompt('Сколько киллометров перевести в мили?', 0);
        if (isNaN(key) == true){alert('Вы ввели строку, введите число')};
      }while(isNaN(key) == true);
      alert('В ' + key + ' километров ' + key * 0.621371 + ' миль');
      break;
    case '1':
      do{
        key = prompt('Сколько миль перевести в киллометры?', 0);
        if (isNaN(key) == true){alert('Вы ввели строку, введите число')};
      }while(isNaN(key) == true);
      alert('В ' + key + ' миль ' + key * 1.60934 + ' киллометров')
      break;
  }