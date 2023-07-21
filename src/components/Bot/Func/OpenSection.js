function OpenSection(sentence) {
  // Remove leading/trailing white spaces and convert the sentence to lowercase
  sentence = sentence.trim().toLowerCase();

  // Check if the sentence contains keywords/phrases related to asking for the bot's name
  var firstKeywords = ['home', 'about', "service", "skill", "portfolio", "resume", "team", "contact"];
  var secoundKeywords = ['open', "navigate to", "click on", "access", "explore", "take", "visit", "delve", "in the", "discover", "uncover", "head over to", "highlights", "within", "go", "get", "browse", ];
  
  let isMatch = false
  for (var n = 0; n < firstKeywords.length; n++) {
    if (sentence.includes(firstKeywords[n])) {
      for (var m = 0; m < secoundKeywords.length; m++) {
        if (sentence.includes(secoundKeywords[m])) {
          const firstPos = sentence.indexOf(secoundKeywords[m])
          const secondPos = sentence.indexOf(firstKeywords[n])
          if(firstPos < secondPos){
            isMatch = true
          }
          break;
        }
      }
      break;
    }
  }
  console.log(isMatch)
  return {
    match: isMatch,
    section: firstKeywords[n]
  };
}

export default OpenSection