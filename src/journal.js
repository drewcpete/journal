export function Entry (title, body){
  this.title = title;
  this.body = body;
  this.wordCount = 1;
  this.vowelCount = 0;
  this.constCount = 0;
}

Entry.prototype.vowelCounter = function() {
  var bodyArray = this.body.split("");
  var vowels = 0;
  var wordCount = 0;
  var constCount = 0;
  bodyArray.forEach(function(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
      vowels += 1;
    } else if (letter === " ") {
      wordCount += 1;
    } else if (letter === "." || letter === "," || letter === "!" || letter === "?") {
      wordCount += 0
    } else {
      constCount += 1;
    }
  });
    this.vowelCount = vowels;
    this.wordCount += wordCount;
    this.constCount = constCount;
    return Entry
};

Entry.prototype.getTeaser = function() {
  var wordArray = this.body.split(" ", 8);
  var teaser = wordArray.join(" ") + "...";
  console.log(wordArray);
  console.log(teaser);
}
