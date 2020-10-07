function shout (string) {
  return string.toUpperCase()
}
function whisper (string) {
  return string.toLowerCase()
}
function logShout (string) {
  console.log(string.toUpperCase())
}
function logWhisper (string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma (string) {
  var lowercase = "hello!"
 
  lowercase.toLowerCase() === lowercase // true
  
  var uppercase = "HELLO!"
 
  uppercase.toUpperCase() === uppercase // true
  
  var mixedCase = "I love you, too."
 
  mixedCase.toLowerCase() === mixedCase // false
}