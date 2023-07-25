// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function SkillCard(skill) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="skillCard" data-aos="fade-up">
      <div className="cardBox">
        <img src={skill.skill.logo} alt="" />
        <h3>{skill.skill.title}</h3>
        <p>{skill.skill.description}</p>
      </div>
    </div>
  )
}

export default SkillCard