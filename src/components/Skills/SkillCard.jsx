

function SkillCard(skill) {
  console.log(skill.skill.logo)
  return (
    <div className="skillCard">
      <div className="cardBox">
        <img src={skill.skill.logo} alt="" />
        <h3>{skill.skill.title}</h3>
        <p>{skill.skill.description}</p>
      </div>
    </div>
  )
}

export default SkillCard