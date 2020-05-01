function matrix(rows, columns) {
  var element,
    arr = new Array();
  for (var i = 0; i < columns; i++) {
    arr[i] = new Array();
    for (var j = 0; j < rows; j++) {
      do {
        element = prompt('Введите желаемый ' + j + ' элемент для ' + i + ' столбца в массиве', 2);
        arr[i][j] = element;
        if ( isNaN(element) == true ){
          alert('Вы ввели строку, введите число')
        }
        if ( element % 1 != 0 && isNaN(element) != true ) {
          alert('Вы ввели вещественное число, введите целое')
        }
        } while ( isNaN(element) == true && element % 1 != 0 )
      }
    }
    return arr;
}

function isLetter(character) {
  return character.toLowerCase() != character.toUpperCase();
}

function isNotSpace(character) {
  return character != undefined && character != '' && character != ' ';
}

function isSpace(character) {
  return character == '' || character == ' ';
}