import React from 'react'
import "./Info.css"
import {Test1,Test2, Test3} from "../../assets"

const Info = () => {
  return (
    <section id ="info" className='dark-gray'>
        <div className='wrapper'>
        <div className='content-container'>
            <div className='info-content'>
                <img src={Test1}/>
              <div className='icon'>Icon</div>
              <div className='type'> UI Player Button</div>
        
            </div>
        </div>
<img className='image-info' src={Test3} alt="Test3.jpg"/>
<img className='image-info2' src={Test2} alt="Test3.jpg"/>

        </div>
    </section>
  )
}

export default Info
