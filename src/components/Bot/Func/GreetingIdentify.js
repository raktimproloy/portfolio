function GreetingIdentify(sentence) {
    // Remove leading/trailing white spaces and convert the sentence to lowercase
    sentence = sentence.trim().toLowerCase();
    // Check if the sentence contains keywords/phrases related to greetings
    var nameKeywords = ["un", 'hey', 'hello', "hi", "howdy", "greetings", "good morning", "good afternoon", "good evening", "yo", "what's up", "hey there"];
    for (var i = 0; i < nameKeywords.length; i++) {
      if (sentence.includes(nameKeywords[i])) {
        return true;
      }
    }
    return false;
  }

export default GreetingIdentify