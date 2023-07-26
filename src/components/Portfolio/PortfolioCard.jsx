// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function PortfolioCard(portfolio) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="portfolioCard" data-aos="fade-up">
            <img src={portfolio.portfolio.image} alt="" className="portfolioImage"/>
        <div className="portfolioCardItems">
            <div className="text">{portfolio.portfolio.title}</div>
            <p className="portfolioDes">{portfolio.portfolio.description}</p>
            <div className="uses">
              {
                portfolio.portfolio.createdBy.map((uses, index) => 
                    <p key={index}>{uses}</p>
                )
              }
            </div>
            <div className="portfolioButtons">
              <a href={portfolio.portfolio.live} target="_blank" rel="noopener noreferrer">Visit</a>
              <a href={portfolio.portfolio.github} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCard