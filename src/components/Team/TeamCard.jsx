// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function TeamCard(team) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="card" data-aos="fade-up">
        <div className="box">
            <img src={team.team.image} alt="" className="about-img"/>
            <div className="text">{team.team.name}</div>
            <h4 className="expertText">{team.team.expert}</h4>
            <p className="teamDes">{team.team.description}</p>
            {/* <a href="">{team.team.porforlio}</a> */}
            
            <div className="teamButtons">
              <p>Visit</p>
              <p>Github</p>
            </div>
        </div>
    </div>
  )
}

export default TeamCard