// Replay on greetings

const firstGreetingCommon = ["Hi,", "Hello,", "Yes, ", "Hey,"]
const firstGreetingFixed = {
    "Howdy": "Howdy sir",
    "Good morning": "good morning",
    "good afternoon": "good afternoon",
    "good evening": "good evening"
}
const extraAddGreeting = ["How can i help you", "How can i assist you"]

export function GreetingReplay() {
    const randomIndex = Math.floor(Math.random() * firstGreetingCommon.length);
    const randomIndexTwo = Math.floor(Math.random() * extraAddGreeting.length);
    return firstGreetingCommon[randomIndex] + extraAddGreeting[randomIndexTwo]
}


// Replay On ask name

const askBotName = ["Greetings! I am web-bot, your helpful assistant for navigating websites.",
"I'm web-bot, a virtual companion designed to assist you with website exploration.",
"You can call me web-bot, your personal website guide at your service!",
"Hello! I go by the name web-bot, here to make your website visits more enjoyable.",
"I'm web-bot, your friendly web assistant. How can I assist you today?"]

export function AskNameReplay() {
    const randomIndex = Math.floor(Math.random() * askBotName.length);
    return askBotName[randomIndex]
}