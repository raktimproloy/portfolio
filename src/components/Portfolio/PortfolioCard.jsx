import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function PortfolioCard({ portfolio }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modalOverlay')) {
      closeModal();
    }
  };

  return (
    <>
      <div className="portfolioCard" data-aos="fade-up">
        <img src={portfolio.image} alt="" className="portfolioImage" />
        <div className="portfolioCardItems">
          <div className="text">{portfolio.title}</div>
          <p className="portfolioDes">{portfolio.description}</p>
          <div className="portfolioButtons">
            <button className="detailsButton" onClick={openModal}>
              Details
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modalOverlay" onClick={handleOverlayClick}>
          <div className="modal">
            <button className="closeButton" onClick={closeModal}>
              &times;
            </button>
            <div className="modalContent">
              {/* <video controls className="modalVideo">
                <source src={portfolio.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={portfolio.image} alt="" className="modalVideo" />
              <div className="modalTechnologies">
                <h3>Technologies Used:</h3>
                <ul>
                  {portfolio.createdBy.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="modalText">
                <h3>Project Details:</h3>
                <p>{portfolio.details}</p>
              </div>
              <div className="modalDifficulties">
                <h3>Challenges Faced:</h3>
                {portfolio.difficulties.length > 0 ? (
                  <ul className='listStyle'>
                    {portfolio.difficulties.map((difficulty, index) => (
                      <li key={index} className="difficultyItem">
                        {difficulty}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No difficulties reported.</p>
                )}
              </div>

              <div className="modalButtons">
                <a href={portfolio.live} target="_blank" rel="noopener noreferrer">
                  See Live
                </a>
                {
                  portfolio.github && portfolio.github.length > 0 ?
                    <a href={portfolio.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  :
                  ""
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PortfolioCard;