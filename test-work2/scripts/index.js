var obj = {
   className
}
function addClass(){
  var className;
  do {
    email = prompt("Введите ваш электронный адрес", 2);
    email = email.replace(/\s+/g,' ');
    if(email == '' || email == ' '){
      alert('Ничего не введено');
    } 
  }while(email == '' || email == ' ');
}