function shout(string) {
  return string.toUpperCase()
}
//changes text to uppercase

function whisper(string) {
  return string.toLowerCase()
}
//changes text to lowercase

function logShout(string) {
  string = string.toUpperCase()
console.log(string)
}
//changes text to uppercase and outputs in console

function logWhisper(string) {
  string = string.toLowerCase()
console.log(string)
}
//changes text to lowercase and outputs to console

var lowercase = 'hello'
var uppercase = 'HELLO'
var mixedCase = 'I Love you, Grandma.'
function sayHiToGrandma(string) {
  if (lowercase.toLowerCase() === lowercase) {
  return "I can\'t hear you!"
} else if (uppercase.toUpperCase() === uppercase) {
  return "YES INDEED!"
} else if (string === mixedCase) {
  return "I love you, too"
}
}
