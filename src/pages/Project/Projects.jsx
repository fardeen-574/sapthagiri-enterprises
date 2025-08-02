
import styles from "./Projects.module.css"
import ImageSlider from '../../component/ImageSlider/ImageSlider'
import {
   MainWork,
   Laser1,Laser2,Laser3,Laser4,Laser5,
   Bending1,Bending2,Bending3,Bending4,Bending5,
   Milling1,Milling2,Milling3,Milling4,Milling5,
   Turning1,Turning2,Turning3,Turning4,Turning5,Turning6,
   Work1,Work2,Work3,Work4,Work5,Work6,Work7,Work8,Work9,Work10,Work11,Work12,Work13,Work14,Work15
 } from "../../assets";

 const laserImages = [
  Laser1, Laser2, Laser3, Laser4, Laser5
];
 const bendingImages = [
  Bending1, Bending2, Bending3, Bending4, Bending5
];
 const millingImages = [
  Milling1,Milling2,Milling3,Milling4,Milling5
];
 const turningImages = [
  Turning1, Turning2, Turning3, Turning4, Turning5, Turning6
];
const workGallery = [
  MainWork,
  Work1, Work2, Work3, Work4, Work5,
  Work6, Work7, Work8, Work9, Work10,
  Work11, Work12, Work13, Work14, Work15
];

const Projects = () => {
  return (
    <div className={styles.ProjectsSection}>
        <section className={styles.projectsHeader}>
            <h1>
                OUR WORKS
            </h1>
        </section>
        <section>  
          <div className={styles.Sliders}>
            <h2>OUR WORKS</h2>
            <ImageSlider images={workGallery} />
          </div>
          <div className={styles.Sliders}>
            <h2>CNC LASER WORKS</h2>
            <ImageSlider images={laserImages} />
          </div>
          <div className={styles.Sliders}>
            <h2>CNC BENDING WORKS</h2>
            <ImageSlider images={bendingImages} />
          </div>
          <div className={styles.Sliders}>
            <h2>CNC MILLING WORKS</h2>
            <ImageSlider images={millingImages} />
          </div>
          <div className={styles.Sliders}>
            <h2>CNC TURNING WORKS</h2>
            <ImageSlider images={turningImages} />
          </div>
        </section>
    </div>
  )
}

export default Projects