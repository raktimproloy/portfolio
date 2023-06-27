import "./style.css"


function Contact() {
  return (
    <section className="contact" id="contact">
    <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="semiTitleContainer">
            <p className="semiTitleBgWhite">get in touch with him</p>
        </div>
        <div className="contact-content">
            <div className="column left">
                <div className="text">Get in Touch</div>
                <p></p>
                <div className="icons">
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <div className="info">
                            <div className="head">Name</div>
                            <div className="sub-title">Sudipto Laskar</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="info">
                            <div className="head">Address</div>
                            <div className="sub-title">Kazla, Rajshahi, Bangladesh</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-envelope"></i>
                        <div className="info">
                            <div className="head">Email</div>
                            <div className="sub-title">avilashlasker01@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column right">
                <div className="text">Message me</div>
                <form action="https://formspree.io/f/xayzrreb" method="POST">
                    <div className="fields">
                        <div className="field name">
                            <input type="text" placeholder="Name" name="name" required/>
                        </div>
                        <div className="field email">
                            <input type="email" placeholder="Email" name="email" required/>
                        </div>
                    </div>
                    <div className="field">
                        <input type="text" placeholder="Subject" name="subject" required/>
                    </div>
                    <div className="field textarea">
                        <textarea cols="50" rows="20" placeholder="Message..." name="message" required></textarea>
                    </div>
                    <div className="button">
                        <button type="submit">Send message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact