function fTable() {
  var 
    x1,
    x2,
    dx,
    y,
    table = document.getElementById('table');
  if(table.childNodes.length != 2){
    while (table.childNodes.length != 2){
      table.removeChild(table.childNodes[2]);
    }
  }
  do {
    x1 = prompt('Введите целое число x1', 2);
    if (isNaN(x1) == true) { alert('Вы ввели строку, введите число') }
  } while (isNaN(x1) == true)
  do {
    x2 = prompt('Введите число x2 не равное ' + x1, 3);
    if (x1 == x2) { alert('Вы ввели x2 равное ' + x1) }
    if (isNaN(x2) == true) { alert('Вы ввели строку, введите число') }
  } while (isNaN(x2) == true)
  x1 = parseInt(x1);
  x2 = parseInt(x2);
  do {
    if (x1 < x2) {
      do {
        dx = prompt('Введите число dx > 0', 0.5);
        if (dx == 0) { alert('Вы ввели dx = 0, dx не должен равняться 0') }
      } while (dx <= 0)
    } else {
      do {
        dx = prompt('Введите число dx < 0', -0.5);
        if (dx == 0) { alert('Вы ввели dx = 0, dx не должен равняться 0') }
      } while (dx >= 0)
    };
    if (isNaN(dx) == true) { alert('Вы ввели строку, введите число') }
  } while (isNaN(dx) == true)
  if (x1 < x2) {
    while (x1 <= x2) {
      if (Math.cos(x1) == 0) {
        continue;
      }
      y = (x1 - 5) / Math.cos(x1);
      row = document.createElement('tr');
      xD = document.createElement('td');
      yD = document.createElement('td');
      xD.appendChild(document.createTextNode(x1));
      yD.appendChild(document.createTextNode(y));
      row.appendChild(xD);
      row.appendChild(yD);
      table.appendChild(row);
      x1 = parseFloat(x1) + parseFloat(dx);
    }
  } else {
    while (x1 >= x2) {
      if (Math.cos(x1) == 0) {
        continue;
      }
      y = (x1 - 5) / Math.cos(x1);
      row = document.createElement('tr');
      xD = document.createElement('td');
      yD = document.createElement('td');
      xD.appendChild(document.createTextNode(x1));
      yD.appendChild(document.createTextNode(y));
      row.appendChild(xD);
      row.appendChild(yD);
      table.appendChild(row);
      x1 = parseFloat(x1) + parseFloat(dx);
    }
  }
}