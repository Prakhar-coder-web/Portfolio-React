import React from 'react'
import "./Skills.css";
import VanillaTilt from 'vanilla-tilt';

function Skills() {
  const skills2 = [
    {
      id: 1,
      skill: "html",
      per: "95%",
      src: "./html.png"
    },
    {
      id: 2,
      skill: "css",
      per: "92%",
      src: "./css.png"
    },
    {
      id: 3,
      skill: "Js",
      per: "91%",
      src: "./js.png"
    },
    {
      id: 4,
      skill: "react.js",
      per: "93%",
      src: "./atom.png"
    },
    {
      id: 5,
      skill: "Vue.js",
      per: "87%",
      src: "./brands.png"
    },
    {
      id: 6,
      skill: "sass",
      per: "99%",
      src: "./sass.png"
    }
  ]
  const items = skills2.map((obj) =>
    <div id={obj.id} class="skillsbar">
      <span className='imglogo'><img src={require(`${obj.src}`)} /></span> <span class="name">{obj.skill}</span>
      <div class="percent">
        <div class="progress" style={{ width: `${obj.per}` }}></div>
      </div>
      <span class="value">{obj.per}</span>
    </div>
  );
  function glare(){
    VanillaTilt.init(document.querySelectorAll(".skills-main-bottom-row-box"), {
      max: 40,
      speed: 800,
      glare: true,
      "max-glare": 1,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",   
    });
  }
  return (
    <div className='skills' id='Skills'>
      <h2>Skills</h2>
      <div className="skills-main">
        <div className="skills-main-top">I have worked with several technologies over the past few years. I believe that the right combination of the frontent and backend languages can deliver a beautiful and powerful website. My skills and technologies are diversified which provides me with that much needed flexibility</div>
      </div>
      <div className="skills-main-bottom">
        <div className="skills-main-bottom-row">
          <div className="skills-main-bottom-row-box" onMouseOver={glare}>
            <img src={require('./html.png')} alt="" />
            <div className="skills-main-bottom-row-box-des">Html</div>
          </div>
          <div className="skills-main-bottom-row-box" onMouseOver={glare}>
            <img src={require('./css.png')} alt="" />
            <div className="skills-main-bottom-row-box-des">CSS</div>
          </div>
          <div className="skills-main-bottom-row-box" onMouseOver={glare}>
            <img src={require('./js.png')} alt="" />
            <div className="skills-main-bottom-row-box-des">Js</div>
          </div>
        </div>
        <div className="skills-main-bottom-row">
          <div className="skills-main-bottom-row-box" onMouseOver={glare}>
            <img src={require('./angular.jpg')} alt="" />
            <div className="skills-main-bottom-row-box-des">Angular</div>
          </div>
          <div className="skills-main-bottom-row-box" onMouseOver={glare}>
            <img src={require('./atom.png')} alt="" />
            <div className="skills-main-bottom-row-box-des">React</div>
          </div>
          <div className="skills-main-bottom-row-box" onMouseOver={glare}>
            <img src={require('./sass.png')} alt="" />
            <div className="skills-main-bottom-row-box-des">Sass</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills