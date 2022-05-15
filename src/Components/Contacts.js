import React from 'react'
import "./Contacts.css"

function Contacts() {
    return (
        <div className='contact' id='Contact'>
            <h2>Want to send me a message?</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quam facere ea repudiandae, dolorem temporibus. Exercitationem reiciendis debitis ipsum aperiam. </p>
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
                        <textarea rows="10" placeholder='I wanted to say hello to you' required></textarea>
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