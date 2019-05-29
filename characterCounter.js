function countLetters (str) {
  var uniqueCharacters = {

  }

  var noSpaces = str.split(" ");
  var simpleAnswer = noSpaces.join("");

  for (var i = 0; i < simpleAnswer.length; i++) {
    uniqueCharacters[simpleAnswer[i]] = uniqueCharacters[simpleAnswer[i]]+1 || 1;
  };

  console.log(uniqueCharacters);

}

countLetters("lighthouse in the house");