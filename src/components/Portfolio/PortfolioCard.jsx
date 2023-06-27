

function PortfolioCard(portfolio) {
  return (
    <div className="portfolioCard">
        <div className="">
            <img src={portfolio.portfolio.image} alt="" className="portfolioImage"/>
            <div className="text">{portfolio.portfolio.title}</div>
            <p>{portfolio.portfolio.description}</p>
            <div className="uses">
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>HTML</p>
              <p>HTML</p>
              <p>HTML</p>
            </div>
            <div className="portfolioButtons">
              <p>Visit</p>
              <p>Github</p>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCard