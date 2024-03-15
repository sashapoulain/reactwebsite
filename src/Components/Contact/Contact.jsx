import React from 'react'
import './Contact.css'
import messageImg from '../../assets/image/message.png'
import mail from '../../assets/image/mail.png'
import phone from '../../assets/image/phonel.png'
import location from '../../assets/image/location.png'
import whiteArrow from '../../assets/image/arrrwh.png'
const Contact = () => {

   const [result, setResult] = React.useState("");

   const onSubmit = async (event) => {
     event.preventDefault();
     setResult("Sending....");
     const formData = new FormData(event.target);
 
     formData.append("access_key", "24a1a5be-b711-45b9-aecf-12bb69e8c8f2");
 
     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       body: formData
     });
 
     const data = await response.json();
 
     if (data.success) {
       setResult("Form Submitted Successfully", data.message);
       event.target.reset();
     } else {
       console.log("Error", data);
       setResult(data.message);
     }
   };


  return (
    <div className='contact'>
      <div className='contact-col'>
         <h3> <img src={messageImg}/> Send us a message</h3>
         <p>Feel free to reach out through contact form or find our contact information below. Your feedback, question and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
      <ul>
         <li><img src={mail}/>sashapoulain5@gmail.com</li>
         <li><img src={phone}/>+90 0444 666 77 22</li>
         <li><img src={location}/>Dev st. Dev 11/55, İzmir, TURKEY</li>
      </ul>
      </div>
      <div className='contact-col'>
         <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile phone' required/>
            <label>Write your messages here</label>
            <textarea name="msg" id="" cols="30" rows="10" placeholder='Type your message...' required></textarea>
            <button type='submit' className='btn dark-btn'>Send Message <img src={whiteArrow}/></button>
         </form>
         <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
