function isNotSpace(character) {
  return character != undefined && character != "" && character != " ";
}
function clearExtraSpaces(string) {
  return string.replace(/\s+/g, " ");
}
function isSpace(character) {
  return character == '' || character == ' ';
}