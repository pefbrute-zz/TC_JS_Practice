function minWords(){
  var 
  //try don't assign string 
      string = null,
      words = [],
      minWords = [];
  do {
    string = prompt("Введите какую-нибудь строку", 2);
    string = string.replace(/\s+/g,' ');
    if (string == '' || string == ' '){alert('Вы ничего не ввели')};
  }while(string == '' || string == ' ');
  words = string.split(' ');
  if (string.indexOf(' ') >= 0){
    words = string.split(' ');
  }else{
    alert('Минимальное слово: ', string);
    break;
  };
  minWords[0] = words[0];
  j = 0;
  for(var i = 1; i < words.length; i++){
    if (minWords[0].length > words[i].length){
      minWords[0] = words[i];
    }else if(minWords[0].length == words[i].length){
      j++;
      minWords[j] = words[i];
    };
  }
}