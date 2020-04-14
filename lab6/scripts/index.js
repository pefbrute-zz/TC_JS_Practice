function minWords(){
  var string = null;
  do {
    string = prompt("Введите строку", 2);
    console.log(string);
    if (string == '' || string == ' '){alert('Вы ничего не ввели')};
  }while(string == null);
}