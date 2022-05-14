import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='about' id='About'>
        <h2>About</h2>
        <div className='under'>How it all started</div>
        <div className="about-main">
            <div className="about-main-left">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ipsa alias mollitia officia omnis rem provident dolore a quae libero quam, error velit. Odit, nisi ipsam at porro voluptate tenetur ipsum neque sunt laudantium libero facere, non, nemo eligendi fugiat quae velit eum alias quod aut commodi soluta voluptatum assumenda.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ipsa alias mollitia officia omnis rem provident dolore a quae libero quam, error velit. Odit, nisi ipsam at porro voluptate tenetur ipsum neque sunt laudantium libero facere, non, nemo eligendi fugiat quae velit eum alias quod aut commodi soluta voluptatum assumenda.</p>
            </div>
            <img src={require('./img1.jpg')} alt="" />
        </div>
    </div>
  )
}

export default About