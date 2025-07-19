import React from 'react'
import './ManufacturingProcess.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProcessCard from '../ManufacturingProcess/ProcessCard/ProcessCard'


const ManufacturingProcess = () => {
  const processSteps = [
  {
    number: '01',
    title: 'Customer Inputs',
    description: 'Initial requirements and specifications are collected from the customer.'
  },
  {
    number: '02',
    title: 'Design Using Softwares',
    description: 'The product is digitally designed using CAD and engineering tools.'
  },
  {
    number: '03',
    title: 'Proving the Design for Customer',
    description: 'The design is shared and approved by the customer after review.'
  },
  {
    number: '04',
    title: 'Manufacturing',
    description: 'The approved design is sent for production using manufacturing processes.'
  },
  {
    number: '05',
    title: 'Customer Feedback',
    description: 'Feedback is collected post-delivery to ensure satisfaction and improvements.'
  },
  {
    number: '',
    title: '',
    description: ''
  },

];
  return (
    <div className='manufacturing-process-container'>
      <div className='manufacturing-process-text'>
        <div className='manufacturing-process-first-title'>How we work</div>
        <div className='manufacturing-process-second-title'>Explore our end-to-end<br />
          manufacturing process.</div>
      </div>
      <Swiper 
      className='manufacturing-process-slider'
      slidesPerView={3}
      spaceBetween={0}
      style={{ width: '100%' }}>
        {processSteps.map((item, index) => (
          <SwiperSlide key={index}>
            <div >
              <ProcessCard pdata={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ManufacturingProcess