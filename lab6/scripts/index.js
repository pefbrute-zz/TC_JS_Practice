function getMinWords(){
  var 
  //try don't assign string 
      string = null,
      words = [],
      minWords = [],
      hRow = document.getElementById('main');
  if(hRow.childNodes.length != 3){
    while (hRow.childNodes.length != 3){
      hRow.removeChild(hRow.childNodes[3]);
    }
  };
  do {
    string = prompt("Введите какую-нибудь строку", 2);
    string = string.replace(/\s+/g,' ');
    if (string == '' || string == ' '){alert('Вы ничего не ввели')};
  }while(string == '' || string == ' ');
  if (string.indexOf(' ') >= 0){
    words = string.split(' ');
    minWords[0] = words[0];
    debugger;
    var j = 0;
    //add deleting the previous "the smallest" numbers
    for(let i = 1; i < words.length; i++){
      if (minWords[0].length > words[i].length){
        minWords[0] = words[i];
      }else if(minWords[0].length == words[i].length){
        j++;
        minWords[j] = words[i];
        for(let k = 0; k < minWords.length - 1; k++){
          for(let f = 0; f < minWords.length; f++){
            if (minWords[k].length < minWords[f].length){
              minWords.splice(f,1);
              j--;
            }  
          }
        }
      };
    }
    for(var i = 0; i < minWords.length; i++){
      var hColumn;
      hColumn = document.createElement('td');
      hColumn.appendChild(document.createTextNode(minWords[i]));
      hRow.appendChild(hColumn);
    }
  }else{
    alert('Минимальное слово: ' + string);
  };
}