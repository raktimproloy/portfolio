
import "./style.css"
import SkillCard from "./SkillCard"
import skillsData from  "./skills.json"
import { useEffect, useState } from "react"

function Skills() {

  const [ data, setData] = useState([])

  useEffect(() => {
    setData(skillsData.data)
  }, [])

  return (
  <section className="skills" id="skills">
    <h2 className="title">My skills</h2>
    <div className="semiTitleContainer">
      <p className="semiTitleBgWhite">A Skill Showcase</p>
    </div>

    <div className="skillContainer max-width">
        <div className="skillItems">
        {
          data.length > 0 && data.map((skill, index) => 
            <SkillCard key={index} skill={skill} />
          )
        }
        </div>
    </div>
</section>
  )
}

export default Skills