import { useEffect, useState } from "react";
import "./style.css"
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';
import { useNavigate } from "react-router-dom";
import sectionHandler  from "../../common/sectionHandler";
import isQuestion from "./Func/QuestionChecker";
import AskBotName from "./Func/AskBotName";
import GreetingIdentify from "./Func/GreetingIdentify";
import {GreetingReplay, AskNameReplay, GoingSection} from "./Data/AnswerData";
import OpenSection from "./Func/OpenSection";
import CheckingFunc from "./Func/CheckingFunc";
// import { askBotName } from "./Func/ListeningIdentify";

function Bot() {
  const navigate = useNavigate()
    const [listeningValue, setListeningValue] = useState(false)
    const [botText, setBotText] = useState("Start")
    const [listenValue, setListenValue] = useState('');
    const [animation, setAnimation] = useState("botAnimationUpDown")
    const { listen, stop } = useSpeechRecognition({
      onResult: (result) => {
        setListenValue(result);
        nowSpeak(result)
      },
    });

    const { speak, voices, speaking } = useSpeechSynthesis();
    /* 
      NOTE: 
      redirect link

        setTimeout(() => {
          navigate("/about")
        }, 1000);

      change section

        setTimeout(() => {
          sectionHandler("portfolio")
        }, 1000);
    */
      
        
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
              speak({ text: AskNameReplay(), voice:voices[5] })
            }else if(OpenSection(textListening).match){
              speak({ text: GoingSection(OpenSection(textListening).section, true), voice:voices[5] })
              sectionHandler(OpenSection(textListening).section)
            }
          }else{
            if(GreetingIdentify(textListening)){
              speak({ text: GreetingReplay(), voice:voices[5] })
            }else if(OpenSection(textListening).match){
              speak({ text: GoingSection(OpenSection(textListening).section), voice:voices[5] })
              sectionHandler(OpenSection(textListening).section)
            }else{
              speak({ text: "I don't understand", voice:voices[5] })
            }
          }
        }else{
          speak({ text: "Speak some thing", voice:voices[5] })
        }
      }, 1000);
    }


    useEffect(() => {
      if(listeningValue){
        if(speaking === false){
          setBotText("Listening")
          listen()
        }
      }
    }, [speaking])










    // Test platfrom




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