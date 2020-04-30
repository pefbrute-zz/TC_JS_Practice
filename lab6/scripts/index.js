function getMinWords(){
  var 
    string,
    words = [],
    minWords = [],
    hRow = document.getElementById('main'),
    hColumn;
  if (hRow.childNodes.length != 3){
    while (hRow.childNodes.length != 3) {
      hRow.removeChild(hRow.childNodes[3]);
    }
  }
  do {
    string = prompt("Введите какую-нибудь строку", 2);
    string = string.replace(/\s+/g,' ');
    if (string == '' || string == ' ') {
      alert('Вы ничего не ввели')
    }
  } while (string == '' || string == ' ')
  if (string.indexOf(' ') >= 0) {
    words = string.split(' ');
    if (string.indexOf(' ') == 0) {
      words.splice(0,1)
    }
    if (words[words.length - 1] == '') {
      words.splice(words.length - 1, 1)
    }
    minWords[0] = words[0];
    var j = 0;
    for (let i = 1; i < words.length; i++) {
      if (minWords[0].length > words[i].length) {
        minWords.splice(0,minWords.length);
        minWords[0] = words[i];
        j = 0;
      } else if (minWords[0].length == words[i].length) {
        j++;
        minWords[j] = words[i];
      }
    }
    for (let i = 0; i < minWords.length; i++) {
      var hColumn;
      hColumn = document.createElement('td');
      hColumn.appendChild(document.createTextNode(minWords[i]));
      hRow.appendChild(hColumn);
    }
  } else {
    hColumn = document.createElement('td');
    hColumn.appendChild(document.createTextNode(string));
    hRow.appendChild(hColumn);
  }
}