

function TeamCard(team) {
  return (
    <div className="card">
        <div className="box">
            <img src={team.team.image} alt="" className="about-img"/>
            <div className="text">{team.team.name}</div>
            <h4 className="expertText">{team.team.expert}</h4>
            <p>{team.team.description}</p>
            <a href="">{team.team.porforlio}</a>
            
            <div className="teamButtons">
              <p>Visit</p>
              <p>Github</p>
            </div>
        </div>
    </div>
  )
}

export default TeamCard