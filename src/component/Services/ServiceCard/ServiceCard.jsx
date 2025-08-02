import React from 'react'
import './ServiceCard.css'
import { MoveUpRight  } from 'lucide-react'
const ServiceCard = ( {data}) => {
 const { number, image, title, description } = data;

    return (
    <div className='service-card'>
        <div className='service-card-number'>
            {number}
        </div>
        <div>
            <img className='service-card-image' src={image} alt="" />
     
        <div className="service-card-content">
            <div className='service-card-title'> {title} <MoveUpRight className='service-card-icon'/></div>
            <div className='service-card-description'>
                {description}
            </div>
        </div>
        </div>
    </div>
  )
}

export default ServiceCard