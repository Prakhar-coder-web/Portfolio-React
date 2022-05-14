import React from 'react'
import {Link} from 'react-scroll'
import "./Home.css";
export default function Home() {
    return (
        <>
            <div className='home' id='Home'>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className="home-main">
                    <h4>Hi There 👋, I am</h4>
                    <h2>Stephen potter</h2>
                    <p>I am a full stack developer 👨‍💻 with 9+ yrs of experience based in silicon valley.  I have helped my clients scale their businesses.</p>
                    <button><Link to='About' smooth={true}>Learn more</Link></button>
                </div>
                <img id="id1" src={require('./shape-pattern3.png')} alt="" />
                <img id="id2" src={require('./shape-right.png')} alt="" />
              
            </div>
        </>
    )
}
