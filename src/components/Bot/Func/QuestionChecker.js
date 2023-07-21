function isQuestion(sentence) {
    // Remove leading/trailing white spaces
    sentence = sentence.trim();
  
    // Check if the sentence ends with a question mark
    if (sentence.endsWith('?')) {
      return true;
    }
  
    // Check if the sentence starts with typical question words
    var questionWords = ['who', 'what', 'when', 'where', 'why', 'how', 'is', 'are', 'am', 'do', 'does', 'did', 'can', 'could', 'should', 'would', 'will', 'have', 'has', 'had', 'may', 'might', 'must', 'shall'];
    for (var i = 0; i < questionWords.length; i++) {
      if (sentence.toLowerCase().startsWith(questionWords[i])) {
        return true;
      }
    }
  
    return false;
  }

export default isQuestion;