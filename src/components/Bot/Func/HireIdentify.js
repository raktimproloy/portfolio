function HireIdentify(sentence) {
    // Remove leading/trailing white spaces and convert the sentence to lowercase
    sentence = sentence.trim().toLowerCase();
  
    // Check if the sentence contains keywords/phrases related to asking for the bot's name
    var nameKeywords = ['employ', 'hiring', "considering", "offering", "your nickname", "your full name", "about you"];
    for (var i = 0; i < nameKeywords.length; i++) {
      if (sentence.includes(nameKeywords[i])) {
        return true;
      }
    }
  
    return false;
  }

export default HireIdentify