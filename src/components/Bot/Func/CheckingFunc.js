function CheckingFunc(matchingArray, listeningSentence) {
    let isMatch = false
    const array = matchingArray;
    const sentenceArray = listeningSentence.split(" ")
    console.log(sentenceArray)
    for (let i = 0; i < array.length; i++) {
        if (sentenceArray.includes(array[i])) {
            isMatch = true
            break;
          }
    }
    return  isMatch
}

export default CheckingFunc