import React from 'react';
import "./Project.css";
import $ from 'jquery'

export default function Projects() {

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

      var $all_items = $('.items li');
      var $selected_items = $('.items li[data-cat="' + display_category + '"]');
      var $hidden_items = $('.items li:not( [data-cat="' + display_category + '"] )');

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
  return (
    <div className='project' id='Project'>
      <h2>My projects</h2>
      <div className='top'>
        <nav>
          <ul>
            <li><a href="#all" data-cat="all">all</a></li>
            <li><a href="#frontend" data-cat="frontend">frontend</a></li>
            <li><a href="#fullstack" data-cat="fullstack">Full stack</a></li>
          </ul>
        </nav>
      </div>
      <section>
        <h3>Showing <span class="cat-text">all</span> Projects</h3>
        <ul class="items">
          <div className="items-row">
            <div className="items-box" data-cat={"all"}>
              <img src={require('./carbon.png')} alt="" />
              <div className='items-box-title'>Portfolio creater</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.</p>
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
            <div className="items-box">
              <img src={require('./carbon.png')} alt="" />
              <div className='items-box-title'>Portfolio creater</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.</p>
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
            <div className="items-box">
              <img src={require('./carbon.png')} alt="" />
              <div className='items-box-title'>Portfolio creater</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.</p>
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
          </div>
          <div className="items-row">
            <div className="items-box">
              <img src={require('./carbon.png')} alt="" />
              <div className='items-box-title'>Portfolio creater</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.</p>
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
            <div className="items-box">
              <img src={require('./carbon.png')} alt="" />
              <div className='items-box-title'>Portfolio creater</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.</p>
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
            <div className="items-box">
              <img src={require('./carbon.png')} alt="" />
              <div className='items-box-title'>Portfolio creater</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate unde ipsam atque impedit dolor facilis neque facere quos inventore.</p>
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
          </div>
        </ul>
      </section>
    </div>
  )
}
