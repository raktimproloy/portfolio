function VisittingNow(sentence) {
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
  
  export default VisittingNow;