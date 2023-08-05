import { useEffect, useState } from "react";
import "./style.css"
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';
import { useNavigate } from "react-router-dom";
import sectionHandler  from "../../common/sectionHandler";
import {GreetingReplay, AskNameReplay, GoingSection, GoingLink, visitText} from "./Data/AnswerData";
import {isQuestion, AskBotName, GreetingIdentify, OpenSection, RedirectLink, VisittingNow, PositiveReply } from "./Func/CheckingFunc";
import linkHandler from "../../common/linkHandler";

function Bot() {
  const navigate = useNavigate()
    const [listeningValue, setListeningValue] = useState(false)
    const [pitch, setPitch] = useState(0.8);
    const [rate, setRate] = useState(1);
    const [voiceNum, setVoiceNum] = useState(1)
    const [learningValue, setLearningValue] = useState([])
    const [collectListenData, setCollectListenData] = useState([])
    const [visit, setVisit] = useState(false)
    const [botText, setBotText] = useState("Start")
    const [listenValue, setListenValue] = useState('');
    const [animation, setAnimation] = useState("")
    const { listen, stop } = useSpeechRecognition({
      onResult: (result) => {
        setListenValue(result);
        nowSpeak(result)
      },
    });

    const sectionList = ["home", "about", "services", "skills", "portfolio", "resume", "team", "contact"]
    const [count, setCount] = useState(0)

    useEffect(() => {
      console.log(collectListenData)
    }, [collectListenData])
    const { speak, voices, speaking } = useSpeechSynthesis();
        
    let timeOut;
    const nowSpeak = (listenText) => {
      const textListening = listenText
      clearTimeout(timeOut)

      timeOut = setTimeout(() => {
        if(textListening !== ""){
          setBotText("Speaking")
          stop()
          setCollectListenData([...collectListenData, textListening])
          if(isQuestion(textListening)){
            questionFunc(textListening)
          }else{
            nonQuestionFunc(textListening)
          }
        }else{
          speak({ text: "Speak some thing", voice:voices[voiceNum], rate, pitch })
        }
      }, 1000);
    }

    // This is question checker function
    const questionFunc = (sentence) => {
      if(AskBotName(sentence)){
        speak({ text: AskNameReplay(), voice:voices[voiceNum], rate, pitch })
      }else if(OpenSection(sentence).match){
        speak({ text: GoingSection(OpenSection(sentence).section, "question"), voice:voices[voiceNum], rate, pitch })
        // sectionHandler(OpenSection(sentence).section)
      }
      else{
        speak({ text: "I don't understand.", voice:voices[voiceNum], rate, pitch })
        // setLearningValue([...learningValue, textListening])
      }
    }

    // This is nonquestion function checker
    const nonQuestionFunc = (sentence) => {
      if(GreetingIdentify(sentence)){
        speak({ text: GreetingReplay(), voice:voices[voiceNum], rate, pitch })
      }else if(OpenSection(sentence).match){
        speak({ text: GoingSection(OpenSection(sentence).section, false), voice:voices[voiceNum], rate, pitch })
        sectionHandler(OpenSection(sentence).section)
      }else if(RedirectLink(sentence).match){
        speak({ text: GoingLink(RedirectLink(sentence).section, false), voice:voices[voiceNum], rate, pitch })
        linkHandler(RedirectLink(sentence).section)
      }else if(VisittingNow(sentence).match){
        handleVisit()
      }else if(PositiveReply(sentence)){
        speak({ text: GoingSection(OpenSection(collectListenData[collectListenData.length - 1]).section, "positive"), voice:voices[voiceNum], rate, pitch })
        sectionHandler(OpenSection(collectListenData[collectListenData.length - 1]).section)
      }
      else{
        speak({ text: "I don't understand", voice:voices[voiceNum], rate, pitch })
      }
    }


    useEffect(() => {
      if(listeningValue && !visit){
        if(speaking === false){
          setBotText("Listening")
          listen()
        }
      }

      if(visit){
        if(speaking === false){
          handleVisit()
        }
      }
    }, [speaking, visit])

    const handleVisit = () => {
      if(count < sectionList.length){
        setVisit(true)
        sectionHandler(sectionList[count])
        speak({ text: visitText(sectionList[count]), voice:voices[1], rate, pitch })
        setCount(count + 1)
      }else{
        setVisit(false)
        setCount(0)
      }
    }
    

    useEffect(() => {
      if(botText === "Listening"){
        setAnimation("botAnimationUpDown")
      }else{
        setAnimation("")
      }
    }, [botText])

    // bot message Text function
    const [botMessageText, setBotMessageText] = useState("")
    const [showMessageTime, setShowMessageTime] = useState(3)
    const [showMessage, setShowMessage] = useState(false)
    useEffect(() => {
      setTimeout(() => {
        setBotMessageText("Click me for active assistent")
      }, 2000);
      

    }, [showMessageTime])

  return (
    <div className="botContainer">
      <div className="botDivContainer">
        <div className="botDiv">
          This is dev
        </div>
      </div>
      <input
        className="botListenInput"
        value={listenValue}
        onChange={(event) => setListenValue(event.target.value)}
      />
      <div className="botIconContainer">
        <div className={`botMessage ${showMessage ? "botMessageComming" : "botMessageGoing"}`}>{botMessageText}</div>
        <img src="/src/assets/bot.png" alt="" className={`botIcon ${animation}`} onClick={() => {
        setListeningValue(!listeningValue)
        if(!listeningValue){
          listen()
        }else{
          stop()
        }
        setBotText(botText === "Listening" ? "Start" : "Listening")
        }}/>
      </div>
      <button>{botText}</button>
    </div>
  )
}

export default Bot