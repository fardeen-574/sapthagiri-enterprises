import './Services.css'
import ServiceCard from '../Services/ServiceCard/ServiceCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MoveDownRight  } from 'lucide-react'
import { LaserCuttingService,BendingService,MachineDesignService,MillingService,TurningService } from '../../assets';

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
    image: LaserCuttingService ,
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

  return (
    <div className='services '>
     <div className='services-container'>
        <h1>
            Services
        </h1>
        <div className='services-content-container'>
          <div className="services-content-left">
            <p>Your Partner <br /> in Every Aspect of Metal Production</p>
            <a href="">AWESOME SERVICE <MoveDownRight/></a>
          </div>
          <div className='services-content-right'>
            <p style={{fontWeight:"bold"}}>From design to delivery, we provide tailored metal solutions that meet your unique manufacturing needs.</p>
            <p>Achieve your manufacturing goals with our expert team and comprehensive metal fabrication services. We offer customized solutions and peace of mind for every project.</p>
          </div>
        </div>
      <div className='services-slides-container'>
        <Swiper 
        modules={[Pagination]}
        pagination={{ 
          el: '.custom-pagination',
          clickable: true,
          type: 'bullets', }}
        className='services-slides'
        spaceBetween={30}
        slidesPerView={3}
       
      >
    
        {servicesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div >
              <ServiceCard data={item} />
            </div>
          </SwiperSlide>
        ))}
            <div className="custom-pagination"></div>
      </Swiper>
      </div>
    </div>
    
    </div>
  )
}

export default Services