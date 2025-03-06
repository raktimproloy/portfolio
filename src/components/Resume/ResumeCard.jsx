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
        <p className='locationOne'><b>Location</b> - {resume.resume.location}</p>
        <p><b>Work</b> - {resume.resume.work.join(", ")}</p>
        <span className='locationTwo'>{resume.resume.location}</span>
    </div>
  
  )
}

export default ResumeCard