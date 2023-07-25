// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function ResumeCard(resume) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="experianceCard" data-aos="fade-right">
        <h1>{resume.resume.name}</h1>
        <p>{resume.resume.description}</p>
        <h4>{resume.resume.position} {"("}{resume.resume.startTime} - {resume.resume.endTime}{")"}</h4>
        <p>Work - Javascript, React, Typescript</p>
        <span>UK</span>
    </div>
  )
}

export default ResumeCard