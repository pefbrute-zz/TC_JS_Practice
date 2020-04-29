function isCorrectEmail(){
  var 
    email;
  do {
    email = prompt("Введите ваш электронный адрес", 2);
    email = email.replace(/\s+/g,' ');
    if(email == '' || email == ' '){
      alert('Вы ничего не ввели');
    }else if(email.length < 6){
      alert('Вы ввели только ' + email.length + ' символов. Нужно ввести, как минимум, 6')
    }else if(email.length >= 6){
      debugger;
      var indexOfAtSign = email.indexOf('@');
      if(indexOfAtSign >= 0){          
        if(indexOfAtSign < email.length - 1 && indexOfAtSign - 1 != -1){
          if(isLetter(email[indexOfAtSign - 1])){
              if(indexOfAtSign + 5 <= email.length){
                let emailWithoutAtSign = email.slice(indexOfAtSign, email.length - 1);
                var FirstIndexOfDot = emailWithoutAtSign.indexOf('.');
                if (FirstIndexOfDot > 0){
                  if(isLetter(email[FirstIndexOfDot - 1])){
                    var LastIndexOfDot = email.lastIndexOf('.');
                    if (LastIndexOfDot >= 0 && LastIndexOfDot + 2 < email.length){
                      if (isLetter(email[LastIndexOfDot + 1]) && isLetter(email[LastIndexOfDot + 2])){
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
}while(email == '' || email == ' ');

}