function average() {
  var 
    rows,
    columns,
    nums = [],
    hRowValues = document.getElementById('values'),
    hRowNumbers = document.getElementById('numbers');
  
  if (hRowValues.childNodes.length != 3) {
    while (hRowValues.childNodes.length != 3) {
      hRowValues.removeChild(hRowValues.childNodes[3]);
      hRowNumbers.removeChild(hRowNumbers.childNodes[3]);
    }
  }
  
  do {
    rows = prompt("Введите желаемое количество строк", 2);
    if (isNaN(rows) == true) {
      alert('Вы ввели строку, введите число')
    }
    if (rows % 1 != 0 && isNaN(rows) != true) {
      alert('Вы ввели вещественное число, введите целое');
    }
    if (rows < 0) {
      alert('Вы ввели отрицательное число, введите положительное');
    }
  } while (isNaN(rows) == true || rows % 1 != 0 || rows < 0)
  
  do {
    columns = prompt("Введите желаемое количество столбцов", 2);
    if (isNaN(columns) == true) {
      alert('Вы ввели строку, введите число');
    }
    if (columns % 1 != 0 && isNaN(columns) != true) {
      alert('Вы ввели вещественное число, введите целое');
    }
    if (columns < 0) {
      alert('Вы ввели отрицательное число, введите положительное');
    }
  } while (isNaN(columns) == true || columns % 1 != 0 || columns < 0)
  
  var numMatrix = matrix(rows,columns);

  for (var i = 0; i < columns; i++) {
    nums[i] = 0;
    for (var j = 0; j < rows; j++) {
      nums[i] = nums[i] + parseInt(numMatrix[i][j]);
    }
    nums[i] = nums[i] / columns;
  }
  for (var i = 0; i < columns; i++) {
    var 
      hColumn = document.createElement('td'),
      hRowValues = document.getElementById('values'),
      hRowNumbers = document.getElementById('numbers');
    
    hColumn.appendChild(document.createTextNode(nums[i]));
    hRowValues.appendChild(hColumn);
    hColumn = document.createElement('td');
    hColumn.appendChild(document.createTextNode(i));
    hRowNumbers.appendChild(hColumn);
  }
}