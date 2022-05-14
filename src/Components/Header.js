import React from 'react'
import {Link} from 'react-scroll'
import "./Header.css";

export default function Header() {
    
    return (
        <div className='header'>
            <div className="header-row">
                <div className="l1"><Link to='Home' smooth={true}>Home</Link></div>
                <div className="l1"><Link to='Experience'  smooth={true}>Experience </Link>  </div>
                <div className="l1"><Link to='About' smooth={true}>About </Link>  </div>
                <div className="l1"><Link to='Project' smooth={true}>Projects</Link></div>
                <div className="l1"><Link to='Skills' smooth={true}>Skills</Link></div>
                <div className="l1"><Link to='Contact' smooth={true}>Contact</Link></div>
            </div>
        </div>
    )
}
