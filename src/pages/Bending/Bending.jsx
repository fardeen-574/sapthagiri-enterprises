import { BendingIcon } from '../../assets'
import styles from './Bending.module.css'
import {
  Hammer,
  GanttChartSquare,
  Wrench,
  Clock,
  Layers,
  ScanLine,ChevronDown
} from "lucide-react";
import FeatureComponent from '../../component/FeatureComponent/FeatureComponent';
import ProcessStep from '../../component/ProcessStep/ProcessStep';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Link } from 'react-router-dom';

const cncBendingFeatures = [
  {
    icon: Hammer,
    title: "Precision Bending",
    points: [
      <>Maintains angles within <strong>±1° accuracy</strong></>,
      "Suitable for tight-tolerance part requirements",
    ],
  },
  {
    icon: GanttChartSquare,
    title: "CNC-Controlled Process",
    points: [
      "Programmable settings for repeatable results",
      "Reduces manual error and increases productivity",
    ],
  },
  {
    icon: Wrench,
    title: "Tooling Versatility",
    points: [
      "Handles a variety of V-die and punch combinations",
      "Supports complex bend sequences and box forms",
    ],
  },
  {
    icon: Clock,
    title: "Fast Setup & Operation",
    points: [
      "Quick-change tooling minimizes downtime",
      "Ideal for both low and high-volume jobs",
    ],
  },
  {
    icon: Layers,
    title: "Handles Multiple Materials",
    points: [
      <>Bends <strong>MS, SS, Aluminum, Brass</strong>, etc.</>,
      "Thickness range from 0.5mm to 6mm and beyond",
    ],
  },
  {
    icon: ScanLine,
    title: "Consistent Results",
    points: [
      "Digital back gauge ensures uniform part lengths",
      "Minimizes warping or spring-back during bending",
    ],
  },
];

const stepData = [
  {
    shape: 'circle',
    number: '1',
    title: 'EFFICIENT PRODUCTION, QUICK RESPONSE',
    description: 'In the fast-paced market competition, quick response is the key to success. We have efficient production lines and flexible production scheduling, ensuring timely delivery and meeting your time requirements regardless of the size of your order.'
  },
  {
    shape: 'square',
    number: '2',
    title: 'STRICT QUALITY CONTROL',
    description: 'Quality is our lifeline. We ensure that every product meets high standards through strict quality control processes. Through advanced testing equipment, we are able to promptly detect and correct any possible defects.'
  },
  {
    shape: 'triangle',
    number: '3',
    title: 'PROFESSIONAL TEAM, FULL-SERVICE',
    description: 'Our technical team has rich industry experience and professional knowledge, and they will provide you with professional consultation and technical support throughout the entire process, ensuring that your bending project is impeccable from design to completion.'
  }
];

const Bending = () => {
  return (
    <div className={styles.BendingSection}>
      {/* headersection */}
      <section className={styles.BendingHeader}>
        <h1>
            CNC BENDING
        </h1>
      </section>
      {/* iconsection */}
      <section className={styles.iconSection}>
        <img src={BendingIcon} alt="Sheet Metal Cutting Telangana" />
      </section>
      {/* Intro Section */}
      <section className={styles.IntroductionSection}>
        <h1>
          EXQUISITE CRAFTSMANSHIP,EXCELLENT QUALITY
        </h1>
         <p>
          At <strong style={{color:"#fc8500"}}>Sapthagiri Enterprises</strong>, we offer high-precision <strong>CNC Laser Cutting Services</strong> tailored 
          to your specifications. With advanced CNC technology and trained professionals, we deliver 
          intricate metal cuts with tight tolerances, fast turnaround times, and unmatched consistency. 
          Whether it's prototypes, small batches, or bulk production – our cutting-edge facility is 
          equipped to handle all.
        </p>
      </section>
      {/* Feature Section */}
      <FeatureComponent
      heading="Why Choose Our CNC Bending Services?"
      features={cncBendingFeatures}
      />
       {/* Material */}
      <section className={styles.MaterialSection}>
        <h2 className={styles.Materialheading}>Materials We Bend</h2>
      <div className={styles.MaterialInfo}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ChevronDown />}
            >
            <p className={styles.materialName} style={{color:' #007bff'}}>MILD STEEL</p>
          </AccordionSummary>
          <AccordionDetails className={styles.materialDetail}>
            
            <ul>
              <li>Bending Thickness: <strong>0.2mm to 6mm</strong></li>
              <li>Note: Cost-effective and strong – great for structural or industrial uses.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ChevronDown />}
            >
            <p className={styles.materialName} style={{color:' #555555 '}}>STAINELESS STEEL</p>
          </AccordionSummary>
          <AccordionDetails className={styles.materialDetail}>
            <ul>
              <li>Bending Thickness: <strong>0.2mm to 4mm</strong>.</li>
              <li>Note: Excellent corrosion resistance, ideal for durable components.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ChevronDown />}
          >
            <p className={styles.materialName} >GALVANIZED IRON</p>
          </AccordionSummary>
          <AccordionDetails className={styles.materialDetail}>
            <ul>
              <li>Bending Thickness: <strong>0.2mm to 3mm</strong>.</li>
              <li>Note: Rust-protective coating ensures extended outdoor performance.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ChevronDown />}
          >
            <p className={styles.materialName} style={{color:' #d49100 '}}>BRASS</p>
          </AccordionSummary>
          <AccordionDetails className={styles.materialDetail}>
            <ul>
              <li>Bending Thickness: <strong>0.2mm to 3mm</strong>.</li>
              <li>Note: Smooth finish with good conductivity – perfect for decorative or electronic parts.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ChevronDown />}
          >
            <p className={styles.materialName} style={{color:' #ff5722 '}}>COPPER</p>
          </AccordionSummary>
          <AccordionDetails className={styles.materialDetail}>
            <ul>
              <li>Bending Thickness: <strong>0.2mm to 3mm</strong>.</li>
              <li>Note: Superior conductivity – ideal for electrical and thermal applications.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ChevronDown />}
          >
            <p className={styles.materialName} style={{color:' #0288d1'}}>ALUMINIUM</p>
          </AccordionSummary>
          <AccordionDetails className={styles.materialDetail}>
           <ul>
              <li>Bending Thickness: <strong>0.2mm to 6mm</strong>.</li>
              <li>Note: Lightweight with a clean finish – widely used in enclosures and panels.</li>
            </ul>
          </AccordionDetails>
        </Accordion>        
      </div>
      </section>
      {/*process steps*/}
      <section className={styles.processSection}>
        {stepData.map((step, index) => (
          <ProcessStep key={index} step={step} />
        ))}
      </section>
     
        <section className={styles.laserCTA}>
          <h2>Need CNC Bending?</h2>
          <p>Get in touch with us to discuss your requirements and get a custom quote.</p>
          <Link to="/contact" >Contact Us</Link>
      </section>
    </div>
  )
}

export default Bending