import { useEffect, useState } from "react";
import "./style.css"
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';
import { useNavigate } from "react-router-dom";
import sectionHandler  from "../../common/sectionHandler";
import {GreetingReplay, AskNameReplay, GoingSection, GoingLink, visitText} from "./Data/AnswerData";
import {isQuestion, AskBotName, GreetingIdentify, OpenSection, RedirectLink, VisittingNow } from "./Func/CheckingFunc";
import linkHandler from "../../common/linkHandler";

function Bot() {
  const navigate = useNavigate()
    const [listeningValue, setListeningValue] = useState(false)
    const [pitch, setPitch] = useState(0.8);
    const [rate, setRate] = useState(1);
    const [voiceNum, setVoiceNum] = useState(1)
    const [learningValue, setLearningValue] = useState([])
    const [visit, setVisit] = useState(false)
    const [botText, setBotText] = useState("Start")
    const [listenValue, setListenValue] = useState('');
    const [animation, setAnimation] = useState("botAnimationUpDown")
    const { listen, stop } = useSpeechRecognition({
      onResult: (result) => {
        setListenValue(result);
        nowSpeak(result)
      },
    });

    const sectionList = ["home", "about", "services", "skills", "portfolio", "resume", "team", "contact"]
    const [count, setCount] = useState(0)

    useEffect(() => {
      console.log(learningValue)
    }, [learningValue])
    const { speak, voices, speaking } = useSpeechSynthesis();
        
    let timeOut;
    const nowSpeak = (listenText) => {
      const textListening = listenText
      clearTimeout(timeOut)

      timeOut = setTimeout(() => {
        if(textListening !== ""){
          setBotText("Speaking")
          stop()
          if(isQuestion(textListening)){
            if(AskBotName(textListening)){
              speak({ text: AskNameReplay(), voice:voices[voiceNum], rate, pitch })
            }else if(OpenSection(textListening).match){
              speak({ text: GoingSection(OpenSection(textListening).section, true), voice:voices[voiceNum], rate, pitch })
              sectionHandler(OpenSection(textListening).section)
            }
            else{
              speak({ text: "I don't understand.", voice:voices[voiceNum], rate, pitch })
              // setLearningValue([...learningValue, textListening])
            }
          }else{
            if(GreetingIdentify(textListening)){
              speak({ text: GreetingReplay(), voice:voices[voiceNum], rate, pitch })
            }else if(OpenSection(textListening).match){
              speak({ text: GoingSection(OpenSection(textListening).section, false), voice:voices[voiceNum], rate, pitch })
              sectionHandler(OpenSection(textListening).section)
            }else if(RedirectLink(textListening).match){
              speak({ text: GoingLink(RedirectLink(textListening).section, false), voice:voices[voiceNum], rate, pitch })
              linkHandler(RedirectLink(textListening).section)
            }else if(VisittingNow(textListening).match){
              handleVisit()
            }
            else{
              speak({ text: "I don't understand", voice:voices[voiceNum], rate, pitch })
            }
          }
        }else{
          speak({ text: "Speak some thing", voice:voices[voiceNum], rate, pitch })
        }
      }, 1000);
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
      if(animation === "botAnimationUpDown"){
        setTimeout(() => {
          setAnimation("botAnimationRotate")
        }, 10000);
      }else{
        setTimeout(() => {
          setAnimation("botAnimationUpDown")
        }, 3000);
      }
    }, [animation])

  return (
    <div className="botContainer">
      {/* <div className="inputContainer" style={{left: `${getValuePopup ? "0%" : "150%"}`}}>
        <textarea
          className="getInput"
          value={getValue}
          placeholder="Write what i need to do on this sentence"
          onChange={(event) => setGetValue(event.target.value)}
        />
        <button className="getValueButton" onClick={handleGetValue}>Send</button>
      </div> */}
      <input
        className="botListenInput"
        value={listenValue}
        onChange={(event) => setListenValue(event.target.value)}
      />
      <div className="botIconContainer">
        <div className="botMessage botMessageGoing">Hello sir</div>
        <img src="/src/assets/bot.png" alt="" className={`botIcon ${animation}`} onClick={() => {
        setListeningValue(!listeningValue)
        if(!listeningValue){
          listen()
        }else{
          stop()
        }
        setBotText("Listening")
        }}/>
      </div>
      <button>{botText}</button>
    </div>
  )
}

export default Bot