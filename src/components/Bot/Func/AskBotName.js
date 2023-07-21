function AskBotName(sentence) {
    // Remove leading/trailing white spaces and convert the sentence to lowercase
    sentence = sentence.trim().toLowerCase();
  
    // Check if the sentence contains keywords/phrases related to asking for the bot's name
    var nameKeywords = ['your name', 'who are you', "about yourself", "introduce yourself", "your nickname", "your full name", "about you"];
    for (var i = 0; i < nameKeywords.length; i++) {
      if (sentence.includes(nameKeywords[i])) {
        return true;
      }
    }
  
    return false;
  }

export default AskBotName

// "Hey web-bot, what is your name?"
// "Web-bot, can you tell me your name?"
// "What do you prefer to be called, web-bot?"
// "Hello there, web-bot. May I know your name?"
// "I'm curious, what should I call you, web-bot?"