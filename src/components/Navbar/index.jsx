import { useState, useEffect } from 'react';
import "./style.css"

function Navbar() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <>
    <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
    </div>
    <nav className={`navbar ${scrollPosition !== 0 && "sticky"}`}>
        <div className="max-width">
            <ul className="menu about-img" style={{padding: "20px", borderRadius: "10px"}}>
                <li><a href="#home" className="menu-btn hire">Home</a></li>
                <li><a href="#about" className="menu-btn hire">About</a></li>
                <li><a href="#services" className="menu-btn hire">Services</a></li>
                <li><a href="#skills" className="menu-btn hire">Skills</a></li>
                <li><a href="#portfolio" className="menu-btn hire">Portfolio</a></li>
                <li><a href="#resume" className="menu-btn hire">Resume</a></li>
                <li><a href="#teams" className="menu-btn hire">Team</a></li>
                <li><a href="#contact" className="menu-btn hire">Contact</a></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar