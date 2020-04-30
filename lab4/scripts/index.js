function calcMultiple(){
  var key,
    nums = [],
    amount,
    even;
  do {
    amount = prompt("Введите желаемое количество элементов в массиве", 2);
    if ( isNaN(amount) == true ) {
      alert('Вы ввели строку, введите число')
    };
    if ( amount % 1 != 0 && isNaN(amount) != true ) {
      alert('Вы ввели вещественное число, введите целое')
    }
    if (amount < 0) {
      alert('Вы ввели отрицательное число, введите положительное')
    }
  } while ( isNaN(amount) == true || amount % 1 != 0 || amount < 0 );
  for (var i = 0; i < amount; i++) {
    do {
      key = prompt('Введите желаемый ' + i + ' элемент для массива', 2);
      if (isNaN(key) == true) {
        alert('Вы ввели строку, введите число')
      }
      if ( key % 1 != 0 && isNaN(key) != true ) {
        alert('Вы ввели вещественное число, введите целое')
      }
      if (key < 0) {
        alert('Вы ввели отрицательное число, введите положительное')
      };
  } while ( isNaN(key) == true || key % 1 != 0 || key < 0 );
    nums[i] = parseInt(key);
  };
  do {
    key = prompt("Сосчитать сумму четных элементов?(0)" + "\n" + "Сосчитать произведение элементов, кратных 3?(1)", 0);
    key = parseInt(key);
    if (key != 0 && key != 1) {
      alert('Неправильно введено число')
    };
    if (isNaN(key) == true) {
      alert('Вы ввели строку, введите число')
    };
  } while ( key != 0 && key != 1 || isNaN(key) == true )
  switch (key) {
    case 0:
      even = 0;
      for (var i = 0; i <= amount; i++) {
        if (nums[i] % 2 == 0) {
          even = even + nums[i];
        }
      }
      alert('Сумма четных элементов в вашем массиве из чисел = ' + even);
      break;
    case 1:
      even = 1;
      for (var i = 0; i <= amount; i++) {
        if (nums[i] % 3 == 0) {
            even = even * nums[i];
        }
      }
      if (even == 1) {
        even = 0;
      }
      alert('Произведение элементов, кратных 3 в вашем массиве из чисел = ' + even);
      break;
  }
}

