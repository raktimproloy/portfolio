import "./style.css"
import ServiceCard from "./ServiceCard"
import { useEffect, useState } from "react"
import serviceData from "./service.json"



function Services() {

  const [ data, setData] = useState([])

  useEffect(() => {
    setData(serviceData.data)
  }, [])


  return (
    <>
    <section className="services" id="services">
    <div className="max-width">
      <h2 className="title">Services</h2>
      <div className="semiTitleContainer">
        <p className="semiTitleBgBlack">What I Provide</p>
      </div>
      <div className="serv-content">
        {
          data.length > 0 && data.map((service, index) => 
            <ServiceCard key={index} service={service} />
          )
        }
      </div>
    </div>
  </section>
    </>
  )
}

export default Services