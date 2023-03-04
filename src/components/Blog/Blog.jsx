import React from 'react'
import "./Blog.css";
import {Instrument2, Instrument3, Instrument4} from "../../assets"


const Blog = () => {
  return (
    <section id='blog'className='pink'>
      <div className='wrapper'>
        <h2 className='light'>Latest Instruement</h2>
        <div className='content-container'>

        <div className='post'>
          <div className='tag'>DAW</div>
          <a href='#'>
            <img src={Instrument2} alt=""/>
          </a>
          <a href='#'>
            <h3 className='post-title'>Senior woman learning to play guitar  </h3>
          </a>
        </div>

        <div className='post'>
          <div className='tag'>Mixing</div>
          <a href='#'>
            <img src={Instrument3} alt=""/>
          </a>
          <a href='#'>
            <h3 className='post-title'>Man playing violin stock photo</h3>
          </a>
        </div>

        <div className='post'>
          <div className='tag'>VOX</div>
          <a href='#'> <img src={Instrument4} alt=""/>
          </a>

          <a href='#'>
          <h3 className='post-title'>Focused Young Artist Playing Electric Piano</h3>
          </a>
        </div>
        </div>

        <div className='btn-container'>
          <a href='#' className='all-posts-btn'>
            All Posts
          </a>
        </div>
        </div>
    </section>
  );
};

export default Blog
