import "./style.css"
import AboutImage from "../../assets/aboutImage.png"
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function About() {
  useEffect(() => {
    AOS.init({
      disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      }
    });
  }, [])
  return (
    <section className="about" id="about" >
        <div className="max-width">
            <h2 className="title">Why you hire me?</h2>
            <div className="semiTitleContainer">
              <p className="semiTitleBgWhite">Know More About Me</p>
            </div>
            <div className="about-content">
                <div className="column left" data-aos="fade-right">
                    <img src={AboutImage} alt="" className="about-img" style={{borderRadius: "10px"}}/>
                </div>
                <div className="column right about-img" style={{padding: "20px", borderRadius: "10px"}} data-aos="fade-left" >
                    <div className="text">I am a Passionate <span className="typing-2"></span></div>
                    <p>
                      I{`'`}m Sudipto Laskar and I{`'`}m a passionate web developer. From a young age, I{`'`}ve loved creating things and solving problems. When I discovered programming, I knew it was the perfect outlet for my interests. Within a year and a half of learning, I landed my first job and gained valuable experience working on real projects.

                      I{`'`}m proficient in various programming languages and technologies, including HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, C, Java, CMD and algorithm design. 

                      Although I{`'`}m currently studying business management, I{`'`}ve been self-taught when it comes to programming, and I believe that drive and passion can overcome any obstacle.
                    </p>
                    <a href="/src/assets/cv.jpg" target="_blank" rel="noreferrer" download className="about-img pointer downloadButton">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About