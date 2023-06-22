import "./style.css"

function PortfolioCard(portfolio) {
  return (
    <div className="portfolioCard">
        <div className="">
            <img src={portfolio.portfolio.image} alt="" className="portfolioImage"/>
            <div className="text">{portfolio.portfolio.title}</div>
            <p>{portfolio.portfolio.description}</p>
        </div>
    </div>
  )
}

export default PortfolioCard