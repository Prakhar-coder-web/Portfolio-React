import React from 'react';
import "./Project.css";
import $ from 'jquery'

export default function Projects() {
  const projects = [
    {
      id: 1,
      img: "./carbon.png",
      category: "frontend",
      title: "You can put anything here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.",
    },
    {
      id: 2,
      img: "./carbon.png",
      category: "fullstack",
      title: "You can put anything here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.",
    },
    {
      id: 3,
      img: "./carbon.png",
      category: "frontend",
      title: "You can put anything here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.",
    },
    {
      id: 4,
      img: "./carbon.png",
      category: "fullstack",
      title: "You can put anything here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.",
    },
    {
      id: 5,
      img: "./carbon.png",
      category: "frontend",
      title: "You can put anything here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.",
    },
    {
      id: 6,
      img: "./carbon.png",
      category: "fullstack",
      title: "You can put anything here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.",
    }
  ];
  const pr = projects.map((obj) =>
    <div key={obj.id} className="items-box" data-cat={obj.category}>
      <img src={require(`${obj.img}`)} alt="srcimage" className="projectimage" />
      <div className='items-box-title'>Project-{obj.id}</div>
      <p>{obj.description}</p>
      <div className="items-box-bottom">
        <div className="items-box-bottom-left">
          <img src={require('./html.png')} alt="" />
          <img src={require('./css.png')} alt="" />
          <img src={require('./js.png')} alt="" />

        </div>
        <div className="items-box-bottom-right">
          <img src={require('./github.png')} alt="" />
        </div>
      </div>
    </div>

  );
  (function () {
    var wf = document.createElement('script');
    wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
  (function () {
    var wf = document.createElement('script');
    wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
  $(function () {
    $('a[data-cat]').click(function (e) {
      e.preventDefault()
      var display_category = $(this).data('cat');

      var $all_items = $('.items-box');
      var $selected_items = $('.items-box[data-cat="' + display_category + '"]');
      var $hidden_items = $('.items-box:not( [data-cat="' + display_category + '"] )');

      $('.cat-text').text(display_category);

      if (display_category === 'all') {
        $all_items.removeClass('visible').addClass('hidden');
        setTimeout(function () {
          $all_items.show();
          setTimeout(function () {
            $all_items.removeClass('hidden').addClass('visible')
          }, 300);
        }, 300);
      }
      else {
        $all_items.removeClass('visible').addClass('hidden');
        setTimeout(function () {
          $hidden_items.hide();
          $selected_items.show();
          setTimeout(function () {
            $selected_items.removeClass('hidden').addClass('visible');
          }, 300);
        }, 300);
      }
    });
  });

  const adder = () => {
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    one.addEventListener('click', () => {
      one.classList.add("act");
      if (two.classList.contains("act")) {
        two.classList.remove("act");
      }
      if (three.classList.contains("act")) {
        three.classList.remove("act");
      }

    })
    two.addEventListener('click', () => {
      two.classList.add('act');
      if (one.classList.contains("act")) {
        one.classList.remove("act");
      }
      if (three.classList.contains("act")) {
        three.classList.remove("act");
      }
    })
    three.addEventListener('click', () => {
      three.classList.add('act');
      if (two.classList.contains("act")) {
        two.classList.remove("act");
      }
      if (one.classList.contains("act")) {
        one.classList.remove("act");
      }
    })
  }

  return (
    <div className='project' id='Project'>
      <h2>My projects</h2>
      <div className='top'>
        <nav>
          <ul>
            <li><a href="#all" id='one' data-cat="all" onClick={adder}>all</a></li>
            <li><a href="#frontend" id='two' data-cat="frontend" onClick={adder}>frontend</a></li>
            <li><a href="#fullstack" id='three' data-cat="fullstack" onClick={adder}>Full stack</a></li>
          </ul>
        </nav>
      </div>
      <section>
        <h3>Showing <span className="cat-text">all</span> Projects</h3>
        <div className="items">

          {pr}

        </div>
      </section>
    </div>

  )
}
