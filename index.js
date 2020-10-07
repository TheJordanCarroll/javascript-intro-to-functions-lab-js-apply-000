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
  
  return string.if("I can't hear you!")
  
  var uppercase = "HELLO!"
 
  uppercase.toUpperCase() === uppercase // true
  
  return string.if("YES INDEED!")
  
  var mixedCase = 'Hi there!'
 
  mixedCase.toLowerCase() === mixedCase // false
 
  mixedCase.toUpperCase() === mixedCase // false
  
  return string.if("I love you, too.")
}