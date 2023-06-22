

function ServiceCard(service) {
  return (
    <div className="card about-img">
        <div className="box">
        <img src={service.service.logo} width="75px" height="70px"/>
        <div className="text">{service.service.title}</div>
        <p>{service.service.description}</p>
        </div>
    </div>
  )
}

export default ServiceCard