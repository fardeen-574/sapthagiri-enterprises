import React from 'react'
import styles from './AboutPage.module.css'
import { RailSymbol, User } from 'lucide-react'
import { ISO,Railway,HeavyEngineering, Agriculture, ConsumerDurable, PharmaEquipment, MedicalEquipment } from '../../assets'
const AboutPage = () => {
  return (
    <div style={{backgroundColor:"white",color:'black'}}> 
      <section className={styles.aboutPageHeader}>
   
      </section>
      <section className={styles.aboutPageContainer}>
        
        <div className={styles.introDescription}>
          <p> <strong>Looking for professional metal processing services? You have found the best partner. </strong> Whether it’s prototype production in the early stages of design or precision machining for large-scale production, we can provide one-stop solutions. Our services cover design, manufacturing, final assembly, packaging, and storage,
              ensuring that every link is efficient and accurate. Choose us and enjoy fast and reliable metal processing services
          </p>
        </div>
        
        <section className={styles.aboutPageIntro}>
          <div className={styles.aboutPageIntroLeft}>
            <h1>Sapthagiri Enterprises</h1>
            <p>Driving Innovation in Steel Fabrication and Precision Engineering</p>
          </div>
        <div className={styles.aboutPageIntroRight}>
            At <strong>Sapthagiri Enterprises</strong>, we specialize in delivering customized steel fabrication solutions tailored to the evolving demands of industrial manufacturing.
            Since our founding in <strong>2020</strong>, we’ve been committed to quality, reliability, and cutting-edge manufacturing practices.
        </div>
        </section>
        
        <section className={styles.proprietorSection}>
          <div className={styles.proprietorcontainer}>  
            <div>
              <h1>Meet Our Proprietor</h1>
              <h2> Sri. VEERABHADRA  RAO VANUMU</h2>
              <h3 >Founder & Proprietor, Sapthagiri Enterprises</h3>
              <p className={styles.bio}>
              With over 25 years of extensive experience in the mechanical industry,<strong> Sri. VEERABHADRA RAO VANUMU </strong>has played a key role in the development of high-precision components for <strong>Indian Railway products</strong>. His expertise spans across <strong>product design, quality control, manufacturing, and assembly</strong>, bringing a holistic approach to industrial fabrication.
              He is highly skilled in operating and overseeing <strong>CNC machinery, including laser nesting, bending, milling, and turning operations</strong>. Under his leadership, Sapthagiri Enterprises has earned a reputation for quality, innovation, and customer-focused engineering solutions in the field of steel fabrication.
              </p>
            </div>
            <div >
              {/* <img src="/assets/proprietor.jpg" alt="Proprietor of Sapthagiri Enterprises" /> */}
              <User className={styles.proprietorImage} />
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <h1 className={styles.teamHeading}> Our Team Experience </h1>
          <div className={styles.teamExperienceContainer}>
            <div  className={styles.teamExperience}>
              <div className={styles.years}>32+ yrs</div>
              <div className={styles.typeOfExperience}>MECHANICAL INDSUTRY</div>
            </div>
            <div  className={styles.teamExperience}>
              <div className={styles.years}>25+ yrs</div>
              <div className={styles.typeOfExperience}>PRODUCT DESIGN</div>
            </div>
            <div  className={styles.teamExperience}>
              <div className={styles.years}>20+ yrs</div>
              <div className={styles.typeOfExperience}> MANUFACTURING INDUSTRY</div>
            </div>
            <div  className={styles.teamExperience}>
              <div className={styles.years}>20+ yrs</div>
              <div className={styles.typeOfExperience}>MECHANICAL DESIGN SERVICE INDUSTRY</div>
            </div>
          </div>
        </section>
        <section className={styles.certificationSection}>
          <h1 className={styles.certifcateHeader}> Our Certifications</h1>
          <div className={styles.certificationContainer}>
            <p className={styles.certificationDescription}> <strong>Sapthagiri Enterprises</strong> is proudly certified with <strong>ISO 9001:2015</strong>, demonstrating our commitment to quality, consistency, and customer satisfaction in every project.
              This internationally recognized standard ensures that our CNC machining and fabrication processes meet rigorous quality management principles — from precision to process control.
            </p>
            <img src={ISO} alt="ISO Certificatee" />
            <p className={styles.certificationQuote}>
                We continuously strive to uphold and exceed these standards across all stages of production.
            </p>
          </div>
        </section>
        <section className={styles.IndustriesSection}>
          <h1 className={styles.IndustriesHeader}>Industries We Serve</h1>
          <div className={styles.industriesContainer}>
            <div className={styles.industry}>
              <img src={Railway} alt="" />
              <h4>Railway Products</h4>
            </div>
            <div className={styles.industry}>
              <img src={HeavyEngineering} alt="" />
              <h4>Heavy Engineering</h4>
            </div>
            <div className={styles.industry}>
              <img src={Agriculture} alt="" />
              <h4>Agricultural Equipment </h4>
            </div>
            <div className={styles.industry}>
              <img src={ConsumerDurable} alt="" />
              <h4>Consumer Durables</h4>
            </div>
            <div className={styles.industry}>
              <img src={PharmaEquipment} alt="" />
              <h4>Pharma Equipment</h4>
            </div>
            <div className={styles.industry}>
              <img src={MedicalEquipment} alt="" />
              <h4>Medical Equipment</h4>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default AboutPage