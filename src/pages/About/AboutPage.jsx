import React from 'react';
import styles from './AboutPage.module.css';
import { ISO, Railway, HeavyEngineering, Agriculture, ConsumerDurable, PharmaEquipment, MedicalEquipment } from '../../assets';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }}>
      <section className={styles.aboutPageHeader}></section>

      <motion.section
        className={styles.aboutPageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.introDescription}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>Looking for professional metal processing services? You have found the best partner. </strong> Whether it’s prototype production in the early stages of design or precision machining for large-scale production, we can provide one-stop solutions. Our services cover design, manufacturing, final assembly, packaging, and storage, ensuring that every link is efficient and accurate. Choose us and enjoy fast and reliable metal processing services.
          </p>
        </motion.div>

        <motion.section
          className={styles.aboutPageIntro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.div
            className={styles.aboutPageIntroLeft}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Sapthagiri Enterprises</h1>
            <p>Driving Innovation in Steel Fabrication and Precision Engineering</p>
          </motion.div>

          <motion.div
            className={styles.aboutPageIntroRight}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            At <strong>Sapthagiri Enterprises</strong>, we specialize in delivering customized steel fabrication solutions tailored to the evolving demands of industrial manufacturing. Since our founding in <strong>2020</strong>, we’ve been committed to quality, reliability, and cutting-edge manufacturing practices.
          </motion.div>
        </motion.section>

        <motion.section
          className={styles.proprietorSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.proprietorcontainer}>
            <h1>Meet Our Proprietor</h1>
            <h2>Sri. VEERABHADRA RAO VANUMU</h2>
            <h3>Founder & Proprietor, Sapthagiri Enterprises</h3>
            <p>
              With over 25 years of extensive experience in the mechanical industry,
              <strong> Sri. VEERABHADRA RAO VANUMU </strong> has played a key role in the development of high-precision components for
              <strong> Indian Railway products</strong>. His expertise spans across
              <strong> product design, quality control, manufacturing, and assembly</strong>,
              bringing a holistic approach to industrial fabrication. He is highly skilled in operating and overseeing
              <strong> CNC machinery</strong>, including laser nesting, bending, milling, and turning operations. Under his leadership, Sapthagiri Enterprises has earned a reputation for quality, innovation, and customer-focused engineering solutions in the field of steel fabrication.
            </p>
          </div>
        </motion.section>

        <motion.section
          className={styles.teamSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className={styles.teamHeading}> Our Team Experience </h1>
          <div className={styles.teamExperienceContainer}>
            {[
              { years: '32+ yrs', label: 'MECHANICAL INDSUTRY' },
              { years: '25+ yrs', label: 'PRODUCT DESIGN' },
              { years: '20+ yrs', label: 'MANUFACTURING INDUSTRY' },
              { years: '20+ yrs', label: 'MECHANICAL DESIGN SERVICE INDUSTRY' }
            ].map((item, index) => (
              <motion.div
                className={styles.teamExperience}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.years}>{item.years}</div>
                <div className={styles.typeOfExperience}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.certificationSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className={styles.certifcateHeader}> Our Certifications</h1>
          <div className={styles.certificationContainer}>
            <p className={styles.certificationDescription}>
              <strong>Sapthagiri Enterprises</strong> is proudly certified with <strong>ISO 9001:2015</strong>, demonstrating our commitment to quality, consistency, and customer satisfaction in every project. This internationally recognized standard ensures that our CNC machining and fabrication processes meet rigorous quality management principles — from precision to process control.
            </p>
            <motion.img
              src={ISO}
              alt="ISO Certificate"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <p className={styles.certificationQuote}>
              We continuously strive to uphold and exceed these standards across all stages of production.
            </p>
          </div>
        </motion.section>

        <motion.section
          className={styles.IndustriesSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className={styles.IndustriesHeader}>Industries We Serve</h1>
          <div className={styles.industriesContainer}>
            {[
              { src: Railway, label: 'Railway Products' },
              { src: HeavyEngineering, label: 'Heavy Engineering' },
              { src: Agriculture, label: 'Agricultural Equipment' },
              { src: ConsumerDurable, label: 'Consumer Durables' },
              { src: PharmaEquipment, label: 'Pharma Equipment' },
              { src: MedicalEquipment, label: 'Medical Equipment' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className={styles.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={item.src} alt={item.label} />
                <h4>{item.label}</h4>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.section>
    </div>
  );
};

export default AboutPage;
