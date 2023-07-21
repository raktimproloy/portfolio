import { useEffect, useState } from "react"
import PortfolioCard from "./PortfolioCard"
import portfolioData from "./portfolio.json"
import "./style.css"

function Work() {

    const [ data, setData] = useState([])

    useEffect(() => {
      setData(portfolioData.data)
    }, [])
  return (
    <section className="teams" id="portfolio">
        <div className="max-width">
            <h2 className="title">Portfolio</h2>
            <div className="semiTitleContainer">
                <p className="semiTitleBgBlack">My Diverse Portfolio</p>
            </div>
            <div className="carousel owl-carousel">
            {
                data.length > 0 && data.map((portfolio, index) => 
                    <PortfolioCard key={index} portfolio={portfolio} />
                )
            }
            </div>
        </div>
    </section>
  )
}

export default Work