function matrix(rows,columns){
    var element,
        arr = new Array();
    for(var i=0; i<columns; i++){
      arr[i] = new Array();
      for(var j=0; j<rows; j++){
        do {
          element = prompt('Введите желаемый ' + j + ' элемент для ' + i + ' столбца в массиве', 2);
          arr[i][j] = element;
          if (isNaN(element) == true){alert('Вы ввели строку, введите число')};
          //add check on float nums;
        }while(isNaN(element) == true);
      }
    }
    return arr;
  };