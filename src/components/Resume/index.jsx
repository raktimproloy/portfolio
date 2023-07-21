import "./style.css"
import ResumeCard from "./ResumeCard"
import { useEffect, useState } from "react"
import resumeData from "./resume.json"


function Resume() {

  const [ data, setData] = useState([])

  useEffect(() => {
    setData(resumeData.data)
  }, [])
  
  return (
    <section className="skills" id="resume">
    <div className="max-width">
      <h2 className="title">Experiance</h2>
      <div className="semiTitleContainer">
        <p className="semiTitleBgWhite">Journey Through My Professional Experience</p>
      </div>
      <div className="experianceContainer">
        {
          data.length > 0 && data.map((resume, index) => 
            <ResumeCard key={index} resume={resume} />
          )
        }
      </div>
    </div>
  </section>
  )
}

export default Resume






