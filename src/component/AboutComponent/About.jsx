import "./About.css";
import { MoveDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className='about-container'
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className='year-heading'
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Since 2017
      </motion.div>

      <motion.div
        className='about-content'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          className='arrow-icon'
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <MoveDownRight color='#fc8500' className='arrow-sizing' />
        </motion.div>

        <div className='about-text-content'>
          <motion.div
            className='about-compnay-name'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            About Sapthagiri Enterprises
          </motion.div>

          <motion.div
            className='about-title'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            We work since 2017
          </motion.div>

          <motion.div
            className='about-sub-title'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            All C.N.C.SERVICES AND SHEET METAL FABRICATION
          </motion.div>

          <motion.div
            className='about-description'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
          >
            Sapthagiri Enterprises in ISO 9001-2015 Having a full fledged manufacturing unit spread over almost 7000 sq. ft.
            in Hyderabad, an industrial capital of Telangana, India; Sapthagiri Enterprises is all set to meet any task.
            The unit is entirely equipped with all necessary production machinery and various instruments for quality control.
            Whole manufacturing unit is divided in four sub division located nearby each other unit which comprises of 
            state-of-the-art infrastructure and facilities. A well furnished and fully computerized administrative office is located 
            above the workshop to co-ordinate all business activities including accounts and finance too. Other departments like design & development,
            Q.C, Stores, PCC are placed within the manufacturing unit as per the working.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <Link className="about-link" to="/about">
              MORE ABOUT SAPTHAGIRIRENTERPRISES <MoveDownRight className='about-link-icon' />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
