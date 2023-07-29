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

// Replay on going section
const about = [
    `Step into his About Section and get to know the driving force behind his passionate skills and expertise.`,
    `Explore his About Section and get to know the person behind the passion - uncover his skills, expertise, and what drives him to excel.`,
    `You have arrived at the About Section! Here, you'll discover the person behind the passion - uncovering his skills, expertise, and what drives him to excel. Enjoy your exploration!`,
    `A About Section, one of our most popular spots! Take your time and make the most of the resources available here.`,
    `You've just stepped into About Section, where you'll discover the person behind the passion - uncovering his skills, expertise, and what drives him to excel. Feel free to delve deeper into the content.`
]
const service = [
    `Welcome to his Services section - where he bring your dreams to reality with a range of tailored solutions.`,
    `Explore his Services section and unlock a world of possibilities to meet your unique needs and goals.`,
    `Discover how his comprehensive services cater to your requirements, making your life easier and more efficient.`,
    `At his Services section, he pride hisselves on delivering top-notch solutions that exceed expectations.`,
]
const skills = [
    `Welcome to the Skill Section - a showcase of his diverse talents and capabilities.`,
    `Step into his Skill Section and be amazed by his impressive set of expertise.`,
    `In the Skill Section, you'll find a treasure trove of his honed abilities and proficiencies.`,
    `Discover the Skill Section, where his skills shine brightly, leaving a lasting impression.`,
]
const portfolio = [
    `Welcome to his Portfolio Section - a showcase of his proudest achievements and creative endeavors.`,
    `Explore his Portfolio Section and immerse yourself in a visual journey of his past projects and success stories.`,
    `In his Portfolio Section, you'll find a curated collection of his finest works, representing our commitment to excellence.`,
    `Welcome to his Portfolio Section, where each project tells a unique story of creativity and collaboration.`,
    `In the Portfolio Section, you'll find the tangible results of his dedication - a portfolio that speaks for itself.`
]
const experiance = [
    `Welcome to the Experience Section - a journey through his accomplishments and milestones.`,
    `Step into his Experience Section and witness the story of his growth and success.`,
    `Explore the Experience Section to see the valuable lessons learned from his journey so far.`,
    `This is the Experience Section, where his history and expertise converge.`
]
const team = [
    `Meet the exceptional minds that power his team - a collective of talented individuals with a shared vision for excellence.`,
    `Get acquainted with the dream team - a group of dedicated professionals working together to bring you the best.`,
    `His team is a synergy of diverse talents, working passionately to create meaningful experiences for his audience.`,
    `Get to know the individuals who make the magic happen - the driving force behind his achievements.`
]
const contact = [
    `Reach out to him in his Contact Section - he is just a message away from assisting you.`,
    `Let's stay connected! Find his contact information in the Contact Section.`,
    `Communication is key! Connect with him through the Contact Section for any inquiries or feedback.`,
    `Contact him directly through the provided channels in the Contact Section - he value your input.`
]
const questionReply = [
    `Sure, I can.`,
    `Yes, I can`
]
export function GoingSection(section, question){

    /*
    "We are reaching [Section Name]! This is where you'll find [Brief description of section content]. Enjoy exploring!",
        "You've landed in [Section Name]. Are you looking for something specific? Let me know if I can be of any assistance.",
        "Welcome to [Section Name]. As you navigate through this area, you'll discover [Key features/benefits of the section].",
        "Ah, [Section Name], one of our most popular spots! Take your time and make the most of the resources available here.",
        "You've just stepped into [Section Name], where [Description of what the section offers]. Feel free to delve deeper into the content.",
        "Greetings! You've arrived at [Section Name]. Explore our collection of [Content type] and find what intrigues you the most.",
        "Welcome back to [Website Name]! [Section Name] is waiting for you with exciting content and useful resources.",
        "Bravo! You've found your way to [Section Name]. Whether you're a newbie or an expert, there's something for everyone here.",
        "Congratulations on discovering [Section Name]. Prepare to be amazed by the valuable insights and delightful content that awaits you."
    
    */
        const randomIndex = Math.floor(Math.random() * section.length);
        const randomIndexTwo = Math.floor(Math.random() * questionReply.length)
        let text = ""

        switch(section) {
            case "about":
                text = about[randomIndex]
              break;
            case "service":
              text = service[randomIndex]
              break;
            case "skills" || "skill":
                text = skills[randomIndex]
                break;
            case "portfolio":
                text = portfolio[randomIndex]
                break;
            case "experiance":
                text = experiance[randomIndex]
                break;
            case "team":
                text = team[randomIndex]
                break;
            case "contact":
                text = contact[randomIndex]
                break;
            default:
                text = "The section I can Identify"
          }
    
    if(question){
        text = questionReply[randomIndexTwo] + text
    }

    return text
}