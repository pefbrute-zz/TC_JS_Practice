function isCorrectEmail() {
  var email;
  do {
    email = prompt("Введите ваш электронный адрес", 2);
    email = clearExtraSpaces(email);
    if (isSpace(email)) {
      alert("Ничего не введено");
    } else if (email.length < 6) {
      alert(
        "Введено только " +
          email.length +
          " символов. Требуется ввести, как минимум, 6 символов."
      );
    } else if (email.length >= 6) {
      var indexOfAtSign = email.indexOf("@");
      if (indexOfAtSign >= 0) {
        if ( isNotSpace(email[indexOfAtSign - 1]) ) {
          let emailWithoutAtSign = email.slice(indexOfAtSign + 1, email.length);
          var FirstIndexOfDot = emailWithoutAtSign.indexOf(".");

          if (FirstIndexOfDot < 0) {
            alert("Нет точки после @ знака");
          } else if (FirstIndexOfDot == 0) {
            alert("Не хватает 1 символа между @ знаком и первой точкой");
          } else {
            if ( isNotSpace(emailWithoutAtSign[FirstIndexOfDot - 1]) ) {
              var LastIndexOfDot = emailWithoutAtSign.lastIndexOf(".");

              if (LastIndexOfDot + 2 < emailWithoutAtSign.length) {
                if (
                  isNotSpace(emailWithoutAtSign[LastIndexOfDot + 1]) &&
                  isNotSpace(emailWithoutAtSign[LastIndexOfDot + 2])
                ) {
                  alert("Всё замечательно. Ошибок в тексте нет.");
                  break;
                } else {
                  alert("Недостаточно символов после последней точки.");
                }
              } else {
                alert(
                  "Недостаточно символов после последней точки." +
                    "Требуется ввести минимум 2 знака."
                );
              }
            } else {
              alert("Между знаком @ и первой точкой не хватает 1 символа.");
              break;
            }
          }
        } else {
          alert("Недостаточно символов между знаком @ и первой точкой.");
          break;
        }
      } else {
        alert("@ знак не введён.");
        break;
      }
    }
  } while ( isSpace(email) );
}
