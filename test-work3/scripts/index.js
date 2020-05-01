function readValue(value, valueNumber) {
  var nothing = false;
  do {
    value = prompt("Введите " + valueNumber + " значение", 2);
    value = value.replace(/\s+/g, " ");
    if (value == "" || value == " ") {
      alert("Ничего не введено");
      nothing = true;
    }
    if (isNaN(value) == true) {
      alert("Вы ввели строку, введите число");
    }
  } while (isNaN(value) || nothing);
  return value;
}
var calculator = {
  firstValue: 1,
  secondValue: 2,
  sumValue: 3,
  mulValue: 2,
  readValues: function () {
    this.firstValue = readValue(this.firstValue, 1);
    this.secondValue = readValue(this.secondValue, 2);
  },
  sum: function () {
    this.sumValue = parseInt(this.firstValue) + parseInt(this.secondValue);
    alert("Сумма значений равняется " + this.sumValue);
  },
  mul: function () {
    this.mulValue = this.firstValue * this.secondValue;
    alert("Произведение значений равняется " + this.mulValue);
  },
};

function runProgram() {
  calculator.readValues();
  calculator.sum();
  calculator.mul();
}
