import React from 'react'
import './ProcessCard.css'
import { MoveUpRight } from 'lucide-react';
const ProcessCard = ({pdata}) => {
     const { number, title, description } = pdata;
  return (
     <div className='process-card'>
        <div className='card-main-number'>
            {number}            
        </div>
        <div className='card-step-number'>
            {number} step
        </div>

        <div className="process-card-content">
            <div className='process-card-title'> {title}</div>
            <div className='process-card-description'>
                {description}
            </div>
        </div>
    </div>
  )
}

export default ProcessCard