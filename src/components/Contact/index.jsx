import "./style.css"
// import emailjs from 'emailjs-com';

function Contact() {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        // emailjs.sendForm('service_0mk5b65', 'template_xos2f5i', e.target, 'NCwDImUREZKY93h9T')
        //   .then((result) => {
        //     console.log(result)
        //       window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        //   }, (error) => {
        //       console.log(error.text);
        //   });

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ title: 'React POST Request Example' })
            body: {
                "name": "Sudipto",
                "email": "sudipto@gmail.com",
                "phone": "0123"
            }
        };
        fetch('http://localhost:3001/contactus/send/to:avilashlasker01@gmail.com&sub:portfolio_contact', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
    
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
    
                this.setState({ postId: data.id })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }
  return (
    <section className="contact" id="contact">
    <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="semiTitleContainer">
            <p className="semiTitleBgWhite">Reach Out and Stay in Touch</p>
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
                <form onSubmit={sendEmail}>
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