

function TeamCard(team) {
  return (
    <div className="card">
        <div className="box">
            <img src={team.team.image} alt="" className="about-img"/>
            <div className="text">{team.team.name}</div>
            <p>{team.team.description}</p>
        </div>
    </div>
  )
}

export default TeamCard