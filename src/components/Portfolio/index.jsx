import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import portfolioData from "./portfolio.json";
import "./style.css";

function Work() {
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    setData(portfolioData.data);
  }, []);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  return (
    <section className="teams" id="portfolio">
      <div className="max-width">
        <h2 className="title">Portfolio</h2>
        <div className="semiTitleContainer">
          <p className="semiTitleBgBlack">My Diverse Portfolio</p>
        </div>
        <div className="carousel owl-carousel">
          {data.length > 0 &&
            data.slice(0, visibleItems).map((portfolio, index) => (
              <PortfolioCard key={index} portfolio={portfolio} />
            ))}
        </div>
        {visibleItems < data.length && (
          <div className="seeMoreContainer">
            <button className="seeMoreButton" onClick={loadMore}>
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Work;