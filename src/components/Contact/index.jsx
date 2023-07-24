import axios from "axios";
import "./style.css"
import { useState } from "react";
// import emailjs from 'emailjs-com';

function Contact() {

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const changeHandler = (e) => {
        setContactData({...contactData, [e.target.name]: e.target.value})
    }

    function sendEmail(e) {
        e.preventDefault(); 
    
        axios
        .post(
            'https://email-api-elmo.onrender.com/contactus/send/to:avilashlasker01@gmail.com&sub:portfolio_contact',
            contactData,
            {
                params: { 'api-version': '3.0' },
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'your-rapidapi-key',
                    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
                },
            }
        )
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
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
                            <input type="text" placeholder="Name" name="name" required onChange={changeHandler}/>
                        </div>
                        <div className="field email">
                            <input type="email" placeholder="Email" name="email" required onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className="field">
                        <input type="text" placeholder="Subject" name="subject" required onChange={changeHandler}/>
                    </div>
                    <div className="field textarea">
                        <textarea cols="50" rows="20" placeholder="Message..." name="message" required onChange={changeHandler}></textarea>
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
