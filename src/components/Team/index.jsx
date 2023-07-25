
import "./style.css"
import TeamCard from "./TeamCard"
import teamData from "./team.json"
import { useEffect, useState } from "react"

function Team() {

    const [ data, setData] = useState([])

    useEffect(() => {
      setData(teamData.data)
    }, [])

  return (
    <section className="teams" id="team">
    <div className="max-width">
        <h2 className="title">Team</h2>
        <div className="semiTitleContainer">
            <p className="semiTitleBgBlack">My Dynamic Team Journey</p>
        </div>
        <div className="carousel owl-carousel">
            {
                data.length > 0 && data.map((team, index) => 
                <TeamCard key={index} team={team} />
                )
            }
        </div>
    </div>
</section>
  )
}

export default Team