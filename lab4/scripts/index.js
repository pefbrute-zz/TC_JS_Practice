var key, nums = [], amount, even;

do {
  amount = prompt("Введите желаемое количество элементов в массиве", 2);
  if (isNaN(amount) == true){alert('Вы ввели строку, введите число')};
}while(isNaN(amount) == true);
for (var i = 0; i < amount; i++){
  do {
    key = prompt('Введите желаемый ' + i + ' элемент для массива', 2);
    if (isNaN(key) == true){alert('Вы ввели строку, введите число')};
    //add check on float nums;
  }while(isNaN(key) == true);
  nums[i] = parseInt(key);
};
do {
  key = prompt("Сосчитать сумму четных элементов, кратных 3?(0)\n"
            + "Сосчитать произведение элементов, кратных 3?(1)",0);
  if (key < '0' || key > '1'){alert('Неправильно введено число')};
  if (isNaN(key) == true){alert('Вы ввели строку, введите число')};
}while(key < '0' || key > '1' || isNaN(key) == true);
switch (key) {
    case '0':
      even = 0;
      for (var i = 0; i <= amount; i++){
        if (nums[i] % 3 == 0){
          even = even + nums[i];
        };
      }
      alert('Сумма четных элементов, кратных 3 в вашем массиве из чисел = ' + even);
      break;
    case '1':
      even = 1;
      for (var i = 0; i <= amount; i++){
        if (nums[i] % 3 == 0){
          even = even * nums[i];
        };
      }
      alert('Произведение четных элементов, кратных 3 в вашем массиве из чисел = ' + even);
      break;
  }