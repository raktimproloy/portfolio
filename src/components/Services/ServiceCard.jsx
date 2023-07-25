
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function ServiceCard(service) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="card about-img" data-aos="fade-up">
        <div className="box">
          <img src={service.service.logo}/>
          <div className="text">{service.service.title}</div>
          <p>{service.service.description}</p>
        </div>
    </div>
  )
}

export default ServiceCard