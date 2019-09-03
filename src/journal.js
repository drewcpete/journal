export function Entry (title, body){
  this.title = title;
  this.body = body;
  this.wordCount = 1;
  this.vowelCount = 0;
}

Entry.prototype.vowelCounter = function() {
  var bodyArray = this.body.split("");
  var vowels = 0;
  console.log(bodyArray);
  bodyArray.forEach(function(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
      vowels += 1;
    }
  });
    console.log(vowels);
    this.vowelCount = vowels;
    return this.vowelCount;
};


// Entry.prototype.findLetters = function() {
//   var constCount = 0;
//   for (var i = 0; i <= bodyArray.length; i++) {
//     if (bodyArray[i] === " ") {
//       this.wordCount += 1;
//       return this.wordCount;
//     }
//     else if (bodyArray[i] === "a" || bodyArray[i] === "e" || bodyArray[i] === "i" || bodyArray[i] === "o" || bodyArray[i] === "u" || bodyArray[i] === "y") {
//       return vowelCount;
//     }
//     else {
//       constCount += 1;
//       return constCount;
//     }
//   }
//   return bodyArray;
// }
