import React from 'react'
import './Mywork.css'
import Theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import Arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>Projects</h1>
            <img src={Theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />

            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={Arrow_icon} alt="" />
        </div>
        
    </div>
  )
}

export default Mywork