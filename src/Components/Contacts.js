import React from 'react'
import "./Contacts.css"

function Contacts() {
    return (
        <div className='contact' id='Contact'>
            <h2>Want to send me a message?</h2>
            <p>Have an idea but not able to execute it? Need someone to help you build beautiful, elegant and eye-catching websites? Have any queries? or just want to say hello? In either situations feel free to reach out to me. I will always be happy to guide or help you in the best possible manner I can. </p>
            <form>
                <div className="form-main">
                    <div className="contact-row">
                        <input type="text" placeholder='Name' required/>
                        <input type="email" placeholder='Email' required />
                    </div>
                    <div className="contact-row">
                        <input type="tel" placeholder='Phone number' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div className="contact-row">
                        <textarea cols="30" rows="10" placeholder='I wanted to say hello to you' required></textarea>
                    </div>
                    <div className="contact-row-2">
                        <button>Send</button>
                    </div>
                </div>
            </form>
            <div className="contact-bottom">Designed by Prakhar Soni</div>
        </div>
    )
}

export default Contacts