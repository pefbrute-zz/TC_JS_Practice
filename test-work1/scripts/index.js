function isCorrectEmail(){
  var 
    string,
    dotsAfterAtSign = [];
  do {
    string = prompt("Введите какую-нибудь строку", 2);
    string = string.replace(/\s+/g,' ');
    if (string == '' || string == ' '){
      alert('Вы ничего не ввели')
    }
    if (string.length < 6){
      alert('Вы ввели только ' + string.length + ' символов. Нужно ввести, как минимум, 6')
    }else{
      debugger;
      var indexOfAtSign = string.indexOf('@');
      if(indexOfAtSign >= 0){          
        if (indexOfAtSign < string.length - 1){
          if(
              (string[indexOfAtSign + 1] != '' && string[indexOfAtSign + 1] != ' ')
              ||
              (string[indexOfAtSign - 1] != '' && string[indexOfAtSign - 1] != ' ')
            ){
              if(indexOfAtSign + 5 <= string.length){
                let trimmedString = string.slice(0, indexOfAtSign);
                var FirstIndexOfDot = trimmedString.indexOf('.');
                if (FirstIndexOfDot > 0){
                  if(
                    (string[FirstIndexOfDot - 1] != '' && string[FirstIndexOfDot - 1] != ' ')
                    &&
                    (string[FirstIndexOfDot - 2] != '' && string[FirstIndexOfDot - 2] != ' ')
                    ){
                      var LastIndexOfDot = string.lastIndexOf('.');
                      if (LastIndexOfDot >= 0){
                        if (
                          (string[LastIndexOfDot + 1] != '' && string[LastIndexOfDot + 1] != ' ')
                          &&
                          (string[LastIndexOfDot + 2] != '' && string[LastIndexOfDot + 2] != ' ')
                          )
                          {
                            alert('Всё замечательно. У вас нет никаких ошибок в тексте');
                            break;
                          }else{
                            alert(
                              'Вы ввели недостаточно знаков после последней точки.' + 
                              'Нужно ввести минимум 2 знака'
                            );
                          }
                        }
                    }else{
                      alert('Между знаком @ и первой точкой, после @ знака, не достаточно знаков');
                      break;
                    }
                }else{
                  alert('У вас нет точки после @ знака');
                }
              }else{
                alert('Вы не ввели');
                break
              }
            }else{
              alert('Вы не написали хотя бы один символ после или перед знаком @');
              break;
            }
        }else{
          alert('У вас не достаточно символов после знака @');
        }
    }else{
      alert('Вы не ввели @ знак');
      break;
    }
      
      
      // if (i == string.length - 5){
      //   if (string[i] != '@'){ 
      //     //&& 
      //     // (
      //     //   (string[i + 1] == ' ' || string[i + 1] == '') ||
      //     //   (string[i - 1] == ' ' || string[i - 1] == ''))
      //     // ){
      //     // alert('Перед и после @ символа, должен быть хотя бы 1 символ');
      //     break;
      //   }
      //   alert('');
      //   break;
      // }else if (string[i] == '@'){
      //   thereIsAtSign == true;
      //   //add dot check
      //   // if (){
      //   // }
      //   break;
      // }
    } 
  }while(string == '' || string == ' ');

}