

function PortfolioCard(portfolio) {
  return (
    <div className="portfolioCard">
            <img src={portfolio.portfolio.image} alt="" className="portfolioImage"/>
        <div className="portfolioCardItems">
            <div className="text">{portfolio.portfolio.title}</div>
            <p>{portfolio.portfolio.description}</p>
            <div className="uses">
              {
                portfolio.portfolio.createdBy.map((uses, index) => 
                    <p key={index}>{uses}</p>
                )
              }
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