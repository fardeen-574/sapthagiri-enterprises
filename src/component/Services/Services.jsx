import './Services.css';
import ServiceCard from '../Services/ServiceCard/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  LaserCuttingService,
  BendingService,
  MachineDesignService,
  MillingService,
  TurningService,
} from '../../assets';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const servicesData = [
    {
      number: '01',
      image: MachineDesignService,
      title: 'Machine Desiging',
      description: 'Precision sheet metal components offered by us...',
    },
    {
      number: '02',
      image: LaserCuttingService,
      title: 'CNC Laser Cutting',
      description: 'High-speed laser cutting services with precision.',
    },
    {
      number: '03',
      image: BendingService,
      title: 'CNC Bending',
      description: 'Advanced CNC bending for complex shapes and parts.',
    },
    {
      number: '04',
      image: MillingService,
      title: 'CNC Milling',
      description: 'Precision cutting for complex and high-tolerance parts.',
    },
    {
      number: '05',
      image: TurningService,
      title: 'CNC Turning',
      description: 'Accurate shaping of metal parts with smooth finishes.',
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      className='services'
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='services-container'>
        <h1>Services</h1>

        <div className='services-content-container'>
          <div className='services-content-left'>
            <p>Your Partner <br /> in Every Aspect of Metal Production</p>
          </div>
          <div className='services-content-right'>
            <p style={{ fontWeight: 'bold' }}>
              From design to delivery, we provide tailored metal solutions that meet your unique manufacturing needs.
            </p>
            <p>
              Achieve your manufacturing goals with our expert team and comprehensive metal fabrication services. We offer customized solutions and peace of mind for every project.
            </p>
          </div>
        </div>

        <div className='services-slides-container'>
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              type: 'bullets',
            }}
            navigation={true}
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4, spaceBetween: 0 },
            }}
            className='services-slides'
          >
            {servicesData.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.2 }}
                  >
                  <ServiceCard data={item} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
