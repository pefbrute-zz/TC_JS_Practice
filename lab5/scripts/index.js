function average(){
  var key,
    rows,
    columns,
    nums = [],
    hRow = document.getElementById('main');
  // add row cleaning
  do {
    rows = prompt("Введите желаемое количество строк", 2);
    if (isNaN(rows) == true){alert('Вы ввели строку, введите число')};
    if (x1 % 1 != 0){alert('Вы ввели вещественное число, введите целое')};
  }while(isNaN(rows) == true || x1 % 1 != 0);
  do {
    columns = prompt("Введите желаемое количество столбцов", 2);
    if (isNaN(columns) == true){alert('Вы ввели строку, введите число')};
    if (x1 % 1 != 0){alert('Вы ввели вещественное число, введите целое')};
  }while(isNaN(rows) == true || x1 % 1 != 0);
  var numMatrix = matrix(rows,columns);
  for(var i=0; i<columns; i++){
    nums[i] = 0;
    for(var j=0; j<rows; j++){
      nums[i] = nums[i] + parseInt(numMatrix[i][j]);
    }
    nums[i] = nums[i] / columns;
  };
  for (var i = 0; i < columns; i++){
    var hColumn;
    hColumn = document.createElement('td');
    hColumn.appendChild(document.createTextNode(nums[i]));
    hRow.appendChild(hColumn);
  };
}