import React, { useState } from 'react'
import "./Topics.css";
import {Blog, Blog2, Blog3, Blog5, Main3, Main4} from "../../assets";

const Topics = () => {
  const [currentImage, setCurrentImage]= useState(Main3)

  return (
   <section id='topics' className='black'>
    <div className='wrapper'>
        <h2>What will your Like Instrument</h2>
        <div className='content-container'>
            <ul className='topics-list'> 
                <li onMouseEnter={()=> setCurrentImage(Blog)}>
                    What is Frequecies?
                </li>

                <li onMouseEnter={()=> setCurrentImage(Blog2)}>
                    Using is Dom
                </li>

                <li onMouseEnter={()=> setCurrentImage(Blog3)}>
                    Vocals Processing
                </li>

                <li onMouseEnter={()=> setCurrentImage(Blog5)}>
                    Mixing Console
                </li>

                <li onMouseEnter={()=> setCurrentImage(Main4)}>
                    Mastering
                </li>
            </ul>

            <div className='topic-image'>
                <img src={currentImage}></img>
            </div>
        </div>
        <img src={""} className='Main-3'></img>
    </div>
   </section>
  )
}

export default Topics
