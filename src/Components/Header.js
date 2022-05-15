import React, {useEffect} from 'react'
import {Link} from 'react-scroll'
import "./Header.css";

export default function Header() {
    
    const handle = () => {
        const v1 = document.querySelector('.header-row')
        if(v1.classList.contains('open'))
        {
            v1.classList.toggle('close');
        }
        else
        {
            v1.classList.toggle('open');
        }
    }
    useEffect(() => {
        let width = window.screen.width;
        if(width<500){
            document.querySelector('.header-row').classList.toggle('close') 
        }
    },[])
    useEffect(() => {
      let width = window.screen.width;
      if(width>=500)
        document.querySelector('.header-row').classList.toggle('open');
    }, [])
    
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
            <img src={require("./menu.png")} alt="" onClick={handle} />
        </div>
    )
}
