export function AskBotName(sentence) {
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


export function GreetingIdentify(sentence) {
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

export function HireIdentify(sentence) {
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

export function OpenSection(sentence) {
    // Remove leading/trailing white spaces and convert the sentence to lowercase
    sentence = sentence.trim().toLowerCase();
  
    // Check if the sentence contains keywords/phrases related to asking for the bot's name
    var firstKeywords = ['home', 'about', "service", "skills", "skill", "portfolio", "resume", "team", "contact","gmail"];
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
    return {
      match: isMatch,
      section: firstKeywords[n]
    };
  }
  


export function isQuestion(sentence) {
    // Remove leading/trailing white spaces
    sentence = sentence.trim();
  
    // Check if the sentence ends with a question mark
    if (sentence.endsWith('?')) {
      return true;
    }
  
    // Check if the sentence starts with typical question words
    var questionWords = ['who', 'what', 'when', 'where', 'why', 'how', 'is', 'are', 'am', 'do', 'does', 'did', 'can', 'could', 'should', 'would', 'will', 'have', 'has', 'had', 'may', 'might', 'must', 'shall', "tell"];
    for (var i = 0; i < questionWords.length; i++) {
      if (sentence.toLowerCase().startsWith(questionWords[i])) {
        return true;
      }
    }
  
    return false;
  }


export function RedirectLink(sentence) {
    // Remove leading/trailing white spaces and convert the sentence to lowercase
    sentence = sentence.trim().toLowerCase();
  
    // Check if the sentence contains keywords/phrases related to asking for the bot's name
    var firstKeywords = ['facebook', 'linkedin', "github", "gmail", "google"];
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
  
export function VisittingNow(sentence) {
    // Remove leading/trailing white spaces and convert the sentence to lowercase
    sentence = sentence.trim().toLowerCase();

    /*  
        What services do you offer?
        Can you help me find information about [specific topic] on the website?
        What are the available categories for products on the website?
        Can you tell me about the featured products on the homepage?
    */
  
    // Check if the sentence contains keywords/phrases related to asking for the bot's name
    var firstKeywords = ['website', 'homepage', 'this page', 'webpage', 'site', 'web portal', 'web document'];
    var secoundKeywords = ["visit", 'tour', 'journey', 'adventure', 'exploration', 'explor', 'trip', 'travel', 'walkabout', ];
    
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
    return {
      match: isMatch,
    };
  }
  
  export function PositiveReply(sentence) {
    // Remove leading/trailing white spaces
    sentence = sentence.trim();
  
    // Check if the sentence starts with typical question words
    var affermativeWord = ['yea', 'yes', 'sure', 'Yeah', 'Indeed', 'Absolutely', 'Certainly', 'Affirmative', 'Yup', 'Of course', 'Definitely', 'Agreed', 'Absolutely', 'Certainly', 'Undoubtedly', 'For sure', 'Sure thing', 'You bet', 'Without a doubt', 'No doubt', 'Positively', 'For certain', 'Right on'];
    for (var i = 0; i < affermativeWord.length; i++) {
      if (sentence.toLowerCase().startsWith(affermativeWord[i])) {
        return true;
      }
    }
  
    return false;
  }