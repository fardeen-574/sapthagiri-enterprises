import React from 'react'
import "./About.css"
import { MoveDownRight } from 'lucide-react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='about-container'>
        <div className='year-heading '>
            Since 2020
        </div>
        <div className='about-content'>
            <div className='arrow-icon'>
                <MoveDownRight  size={500}/>
            </div>
            <div className='about-text-content'>
                <div className='about-compnay-name'> About Sapthagiri Enterprises </div>
                <div className='about-title'>
                    We work since 2020
                </div>
                <div className='about-sub-title'>
                    All C.N.C.SERVICES AND SHEET METAL FABRICATION
                </div>
                <div className='about-description'>
                Sapthagiri Enterprises in ISO 9001-2015 Having a full fledged manufacturing unit spread over almost 7000 sq. ft.
                in Hyderabad, an industrial capital of Telangana, India; Sapthagiri Enterprises is all set to meet any task.
                The unit is entirely equipped with all necessary production machinery and various instruments for quality control.
                Whole manufacturing unit is divided in four sub division located nearby each other unit which comprises of 
                state-of-the-art infrastructure and facilities. A well furnished and fully computerized administrative office is located 
                above the workshop to co-ordinate all business activities including accounts and finance too. Other departments like design & development,
                Q.C, Stores, PCC are placed within the manufacturing unit as per the working.
                </div>
                <Link className="about-link" to="/about">
                    MORE ABOUT SAPTHAGIRIRENTERPRISES <MoveDownRight/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About