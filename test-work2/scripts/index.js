var obj = {
   className: 'class'
}
function addClass(object, name) {
  if ( !( object.className.includes(name) ) ) {
    document.getElementById('classesList').append(' ' + name);
    object.className += ' ' + name;
    alert('Имя класса было добавлено в список классов успешно!');
  } else {
    alert('Такое имя не было добавлено в список классов, т.к уже есть в списке классов.');
  }
}
function runProgram() {
  var className;
  do {
    className = prompt("Введите имя класса(или классов через пробел)", 2);
    className = clearExtraSpaces(className);
    if ( isSpace(className) ) {
      alert('Ничего не введено');
    }
  } while ( isSpace(className) )
  addClass(obj, className);
}
