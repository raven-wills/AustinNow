var Letter = function(char) {
  this.char = char;

  this.check = function(char) {
    if (typeof char !== "number") {
      console.log("Hello", char);
    }
  };
};

var firstLetter = new Letter(process.argv[2]);
console.log(typeof process.argv[2]);
firstLetter.check();
