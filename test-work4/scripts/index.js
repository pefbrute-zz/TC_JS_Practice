function readValue(valueNumber) {
  var 
    nothing = false,
    value;  
  
  do {
    value = prompt("Введите " + valueNumber + " значение", 2);
    value = value.replace(/\s+/g, ' ');
    
    if ( isSpace(value) ) {
      alert('Ничего не введено');
      nothing = true;
    }
    
    if ( isNaN(value) ) {
      alert('Вы ввели строку, введите число')
    }
  } while ( isNaN(value) || nothing )
  return value;
}

function Summator() {
  this.firstValue = 0;
  this.secondValue = 0;
  this.sum = function(firstValue, secondValue) {
    return parseFloat(firstValue) + parseFloat(secondValue);
  }
  this.run = function() {
    this.firstValue = readValue(1);
    this.secondValue = readValue(2);
    alert( this.sum(this.firstValue, this.secondValue) );
  }
}

function runProgram() {
  new Summator().run();
}
