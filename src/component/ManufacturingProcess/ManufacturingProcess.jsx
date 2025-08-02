import React from 'react';
import './ManufacturingProcess.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProcessCard from '../ManufacturingProcess/ProcessCard/ProcessCard';
import { motion } from 'framer-motion';

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
  ];

  return (
    <motion.div
      className='manufacturing-process-container'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className='manufacturing-process-text'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className='manufacturing-process-first-title'>How we work</div>
        <div className='manufacturing-process-second-title'>
          Explore our end-to-end<br />
          manufacturing process.
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
            type: 'bullets',
          }}
          className='manufacturing-process-slider'
          slidesPerView={3}
          centeredSlides={true}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1440: { slidesPerView: 4, spaceBetween: 0 },
          }}
        >
          {processSteps.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <ProcessCard pdata={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination"></div>
      </motion.div>
    </motion.div>
  );
};

export default ManufacturingProcess;
