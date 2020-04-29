function isCorrectEmail(){
  var 
    string;
  do {
    string = prompt("Введите какую-нибудь строку", 2);
    string = string.replace(/\s+/g,' ');
    if(string == '' || string == ' '){
      alert('Вы ничего не ввели');
    }else if(string.length < 6){
      alert('Вы ввели только ' + string.length + ' символов. Нужно ввести, как минимум, 6')
    }else if(string.length >= 6){
      debugger;
      var indexOfAtSign = string.indexOf('@');
      if(indexOfAtSign >= 0){          
        if(indexOfAtSign < string.length - 1 && indexOfAtSign - 1 != -1){
          if(isLetter(string[indexOfAtSign - 1])){
              if(indexOfAtSign + 5 <= string.length){
                let stringWithoutAtSign = string.slice(indexOfAtSign, string.length - 1);
                var FirstIndexOfDot = stringWithoutAtSign.indexOf('.');
                if (FirstIndexOfDot > 0){
                  if(isLetter(string[FirstIndexOfDot - 1])){
                    var LastIndexOfDot = string.lastIndexOf('.');
                    if (LastIndexOfDot >= 0 && LastIndexOfDot + 2 < string.length){
                      if (isLetter(string[LastIndexOfDot + 1]) && isLetter(string[LastIndexOfDot + 2])){
                        alert('Всё замечательно. У вас нет никаких ошибок в тексте');
                        break;
                      }else{
                        alert(
                          'Вы ввели недостаточно знаков после последней точки.' + 
                          'Нужно ввести минимум 2 знака'
                        );
                      }
                    }else{
                      alert("В вашем электронном адресе недостаточно символов");
                    }
                  }else{
                    alert('Между знаком @ и первой точкой, после @ знака, не достаточно знаков');
                    break;
                  }
                }else{
                  alert('У вас нет точки после @ знака');
                }
              }else{
                alert("У вас не достаточно символов после знака @");
                break
              }
          }else{
              alert('Недостаточно символов между знаком @ и первой точкой');
              break;
            }
        }else{
          alert('У вас не достаточно символов после или перед знаком @');
        }
    }else{
      alert('Вы не ввели @ знак');
      break;
    }
  } 
}while(string == '' || string == ' ');

}