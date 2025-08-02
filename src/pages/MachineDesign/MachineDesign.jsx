import styles from './MachineDesign.module.css'
import { AUTOCAD,CREO,Solidworks } from '../../assets'
import { Link } from 'react-router-dom'
const MachineDesign = () => {
  return (
    <div className={styles.MachineDesignSection}>
      <section className={styles.MachinceDesignHeader}>
        <h1>
          MACHINE DESIGNING
        </h1>
      </section>
      <div className={styles.infosection}>
          <div className={styles.primaryInfo}>
            <h1>LEADING THE FOREFRONT OF TECHNOLOGY</h1>
           <p>
             At <strong>Sapthagiri Enterprises</strong>, we specialize in delivering precision-engineered product designs 
            tailored to your manufacturing and functional requirements. Our design team uses industry-leading 
            software tools to transform your ideas into manufacturable, high-performance products.
           </p>
          </div>
          <div className={styles.software}>SOFTWARE EXPERTISE</div>
          <div className={styles.softwareName}>

            <div className={styles.softwareDetails}> 
              <div className={styles.softwareHeading}>AUTOCAD</div>
              <div className={styles.softwareInfo}>
                We create highly accurate 2D and 3D technical drawings using AutoCAD. Whether it's layout drafting, 
                part detailing, or fabrication-ready schematics, our AutoCAD designs meet global industry standards 
                and client specifications.
              </div>
            </div>
            <img src={AUTOCAD} alt="AUTOCAD" />
          </div>
          <div className={styles.softwareName}>
            <div className={styles.softwareDetails}>
              <div className={styles.softwareHeading}> PRO/E & CREO</div>
              <div className={styles.softwareInfo}>
                For advanced parametric modeling and simulation, we use PTC Creo (formerly Pro/ENGINEER). These tools 
                help us deliver robust 3D CAD designs, assembly modeling, and finite element analysis to ensure your product 
                performs reliably under real-world conditions.
              </div>
            </div>
            <img src={CREO} alt="CREO" />
          </div>
          
          <div className={styles.softwareName}>
            
            <div className={styles.softwareDetails}>
              <div className={styles.softwareHeading}>SOLIDWORKS</div>
              <div className={styles.softwareInfo}>
              We utilize SolidWorks for 3D mechanical design, simulation, and visualization. It allows us to efficiently 
              design complex components and assemblies, run motion studies, and detect interferences early in the process.
              </div>
            </div>
                <img src={Solidworks} alt="SOLIDWORKS" />
          </div>
      </div>
      <section className={styles.laserCTA}>
          <h2>Need CNC Milling?</h2>
          <p>Get in touch with us to discuss your requirements and get a custom quote.</p>
          <Link to="/contact" >Contact Us</Link>
      </section>
    </div>
  )
}

export default MachineDesign