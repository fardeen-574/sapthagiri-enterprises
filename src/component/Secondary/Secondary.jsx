/* eslint-disable no-unused-vars */
import './Secondary.css'
import { SecondaryImage } from "../../assets"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Secondary = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className='secondary-container'
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='secondary-content'>
        <div>
          <div className='secondary-heading'>
            <span>&bull; </span> WHAT WE OFFER?
          </div>
          <div className="secondary-big-heading">
            DESIGN TO PRODUCTION
          </div>
          <p className='secondary-description'>
            At our cutting-edge sheet metal fabrication company, we pride ourselves on delivering precision-engineered solutions tailored to the unique needs of our clients. With a comprehensive suite of services that includes laser cutting, bending, stamping, welding, and surface treatment, we transform raw metal sheets into high-quality, functional components and finished products based on clients’ requirements.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Secondary
