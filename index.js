function shout(string){
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

var uppercase = "HELLO"
var lowercase = "hello"

uppercase.toUpperCase === uppercase
lowercase.toLowerCase === lowercase

function sayHiToGrandma(string) {
  if (string.toLowerCase === string) {
    return "I can't hear you.";
  }
  else if (string.toUpperCase === string) {
    return "YES INDEED!";
  }
  else (string.toMixedCase === string); {
    return "I love you, too.";
  }
}