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
        const randomIndex = Math.floor(Math.random() * section.length);
        const randomIndexTwo = Math.floor(Math.random() * questionReply.length)
        let text = ""

        
    
    if(question === "question"){
        text = `Yes sir, do you want to go ${section} section.`
    }else{
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
            case "contact" || "gmail":
                text = contact[randomIndex]
                break;
            default:
                text = "The section I can Identify"
            }
    }

    return text
}

// Replay on going Link



export function GoingLink(site ,question){
    const linkQusnReply = [
        `Sure, I'll take you to ${site}.`,
        `You got it! Redirecting you to ${site} now.`,
        `Alright, let's visit ${site}.`,
        `${site} coming right up.`,
        `Got it! Taking you to ${site}'s doorstep.`,
    ]
    const randomIndex = Math.floor(Math.random() * linkQusnReply.length)
    let text = linkQusnReply[randomIndex]



// if(question){
//     text = questionReply[randomIndexTwo] + text
// }

return text
}

const homeVisit = [
    `He is a Passionate MERN stack developer, creative problem-solver, and outstanding projects creator.`
]
const aboutVisit = [
    `he is a passionate and self-taught web developer with expertise in HTML, CSS, JavaScript, React, Node, Express, MongoDB, C, Java, CMD, and algorithm design.`
]
const servicesVisit = [
    `His Services: Web development and design with a focus on functionality, security, and creativity. Elevate your projects and captivate your audience with seamless user experiences and optimized SEO.`
]
const skillsVisit = [
    `His Skills: Proficient in HTML, CSS, and JavaScript, with expertise in React and Next for building seamless user interfaces. Experienced in Node, Express, and MongoDB for developing feature-rich web applications, ensuring captivating and innovative digital experiences.`
]
const portfolioVisit = [
    `His Portfolio: Captivating blog website and interactive multiplayer game utilizing MERN stack and HTML, CSS, JavaScript. Distinctive portfolio with Next, Tailwind CSS, showcasing design flair and proficiency in web development technologies.`
]
const resumeVisit = [
    `Element Zero Lab (2022): Junior Frontend Developer in the UK. Worked on diverse projects, mastering JavaScript, React, and TypeScript. Collaborated with seasoned professionals, honed skills, and grew professionally, enriching web development journey.`
]
const teamVisit = [
    `Meet the talented team: Joshim, the Laravel Developer, brings robust API solutions with market insights. Shakib, the Front-End Developer, enhances user experiences with creative web design. Jakir, the SEO Expert, drives business growth with data-driven strategies. Together, we transform ideas into impactful realities with seamless collaboration and diverse expertise.`
]
const contactVisit = [
    `Connect with him easily through the user-friendly contact section. Email, phone number, and secure contact form available for prompt responses. Explore exciting possibilities for collaboration and networking today.`
]


export function visitText(section){
    console.log("section", section)
    let vistiText = ""
    switch(section) {
        case "home": 
        vistiText = homeVisit[0]
            break;
        case "about":
            vistiText = aboutVisit[0]
          break;
        case "services":
            vistiText = servicesVisit[0]
          break;
        case "skills":
            vistiText = skillsVisit[0]
            break;
        case "portfolio":
            vistiText = portfolioVisit[0]
            break;
        case "resume":
            vistiText = resumeVisit[0]
            break;
        case "team":
            vistiText = teamVisit[0]
            break;
        case "contact":
            vistiText = contactVisit[0]
            break;
        default:
            vistiText = "The section I can Identify"
      }
    return vistiText
}


// replay when user told what you can do


/* 

Hello there! I am your trusty Web Assistant Bot, your very own digital navigator in the vast online realm. My purpose is to assist you with this website-related needs and make your online experience a breeze. Whether you're looking for information, socializing, or exploring the web, I've got you covered!

What Can I Do for You?

Introduce Myself: If you ask me "What's your name?", I'll happily reveal my identity and let you know that I am your loyal Web Assistant Bot.

Website Tour Guide: Want a guided tour of this website? I'll take you on a virtual journey through its pages, pointing out essential sections and providing helpful information along the way.

Social Media Shortcut: If you need quick access to my owner Facebook or LinkedIn profile,  I'll instantly redirect you to their respective profiles.

Instant Navigation: Whether you need to jump to a specific section within a website or explore a particular topic, let me know your destination, and I'll whisk you away there without any hassle.

Remember, I'm here to make your online journey smoother and more enjoyable. Thank you 

*/