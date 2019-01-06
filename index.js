function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  string = string.toUpperCase()
console.log(string)
}

function logWhisper(string) {
  string = string.toLowerCase()
console.log(string)
}

var lowercase = 'hello'
var uppercase = 'HELLO'
var mixedCase = 'I Love you, Grandma.'
function sayHiToGrandma(string) {
  if (string = lowercase) {
  return "I can't hear you!"
} else if (string = uppercase) {
  return "YES INDEED!"
} else if (string = mixedCase){
  return "I love you, too"
}
}
