import React from 'react'
import "./Skills.css";
import VanillaTilt from 'vanilla-tilt';

function Skills() {
  const skills1 = [
    {
      id: 1,
      skill: "html",
      src: "./html.png"
    },
    {
      id: 2,
      skill: "css",
      src: "./css.png"
    },
    {
      id: 3,
      skill: "Js",
      src: "./js.png"
    }
  ]
  const skills2 = [
    {
      id: 4,
      skill: "angular",
      src: "./angular.jpg"
    },
    {
      id: 5,
      skill: "react",
      src: "./atom.png"
    },
    {
      id: 6,
      skill: "sass",
      src: "./sass.png"
    }
  ]
  const items1 = skills1.map((obj) => 
    <div id={obj.id} className="skills-main-bottom-row-box" onMouseOver={glare}>
            <img src={require(`${obj.src}`)} alt={obj.skill} />
            <div className="skills-main-bottom-row-box-des">{obj.skill}</div>
    </div>
  
  );
  const items2= skills2.map((obj) => 
    <div id={obj.id} className="skills-main-bottom-row-box" onMouseOver={glare}>
            <img src={require(`${obj.src}`)} alt={obj.skill} />
            <div className="skills-main-bottom-row-box-des">{obj.skill}</div>
    </div>
  

  )
  function glare() {
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
          {items1}
        </div>
        <div className="skills-main-bottom-row">
          {items2}
        </div>
      </div>
    </div>
  )
}

export default Skills