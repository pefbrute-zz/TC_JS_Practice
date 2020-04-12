var key,
    rows,
    columns,
    nums = [];
do {
  rows = prompt("Введите желаемое количество строк", 2);
  if (isNaN(rows) == true){alert('Вы ввели строку, введите число')};
}while(isNaN(rows) == true);
do {
  columns = prompt("Введите желаемое количество столбцов", 2);
  if (isNaN(columns) == true){alert('Вы ввели строку, введите число')};
}while(isNaN(columns) == true);
var numMatrix = matrix(rows,columns);
for(var i=0; i<columns; i++){
  for(var j=0; j<rows; j++){
    nums[i] = nums[i] + j;
  }
}
for (var i = 0; i < columns; i++){
  
};