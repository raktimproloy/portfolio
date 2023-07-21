import CheckingFunc from "./CheckingFunc";

export function askBotName(sentence){
    let listeningSentence = sentence.trim().toLowerCase();
    var nameKeywords = ['your name', 'who are you', "about yourself", "introduce yourself", "your nickname", "your full name", "about you"];
    return CheckingFunc(nameKeywords, listeningSentence)
}