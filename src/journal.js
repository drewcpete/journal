export function Entry (title, body, wordCount){
  this.title = title;
  this.body = body;
  this.wordCount = 1
}

Entry.prototype.findLetters = function() {
  var bodyArray  = this.body.split("");
  var vowelCount = 0;
  var constCount = 0;
  for (var i = 0; i <= bodyArray.length; i++) {
    if (bodyArray[i] === " ") {
      this.wordCount += 1;
    }
    else if (bodyArray[i] === "a" || bodyArray[i] === "e" || bodyArray[i] === "i" || bodyArray[i] === "o" || bodyArray[i] === "u" || bodyArray[i] === "y") {
      vowelCount += 1;
    }
    else {
      constCount += 1;
    }
  }
  return bodyArray;
  return vowelCount;
  return constCount;
  return this.wordCount;
}
