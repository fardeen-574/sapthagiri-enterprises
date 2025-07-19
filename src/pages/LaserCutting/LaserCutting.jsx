import React from 'react'
import styles from './LaserCutting.module.css'
import {LaserIcon} from '../../assets/index'
import { CircleCheckBig, RefreshCcw, Ruler, Scissors, Settings, Shapes,ChevronDown} from 'lucide-react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FeatureComponent from '../../component/FeatureComponent/FeatureComponent';
import ProcessStep from '../../component/ProcessStep/ProcessStep';
import { Link } from 'react-router-dom';

const laserCuttingFeatures = [
  {
    icon: CircleCheckBig,
    title: "High Cutting Accuracy",
    points: [
      <>Achieves tolerances up to <strong>±0.1 mm</strong></>,
      "Ideal for detailed geometries and tight-fitting components",
    ],
  },
  {
    icon: Settings,
    title: "Advanced Machines",
    points: [
      <>Equipped with <strong>2kW–6kW</strong> fiber lasers</>,
      "Capable of high-speed cutting with minimal distortion",
    ],
  },
  {
    icon: Ruler,
    title: "Supported Thicknesses",
    points: [
      "Can cut <strong>MS, SS, aluminium</strong> etc.",
      "Custom material thickness upon request",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Quick Turnaround",
    points: [
      "Optimized automation for faster job completion",
      "Ideal for bulk production",
    ],
  },
  {
    icon: Shapes,
    title: "Complex Shapes",
    points: [
      "Perfect for perforated patterns, custom profiles",
      "Accepts CAD formats like DXF, DWG, AI etc.",
    ],
  },
  {
    icon: Scissors,
    title: "Clean, Burr-Free Edges",
    points: [
      "No need for secondary finishing like grinding",
      "High beam quality ensures consistent part quality",
    ],
  },
];
const stepData = [
  {
    shape: 'circle',
    number: '1',
    title: 'QUALITY ASSURANCE, CUSTOMER TRUST',
    description:
      'Our quality management system strictly follows ISO standards to ensure that every product meets the highest standards. Our testing technology and equipment can ensure cutting accuracy, reduce errors, and improve product consistency.'
  },
  {
    shape: 'square',
    number: '2',
    title: 'SUCCESSFUL CASES, WITNESS STRENGTH',
    description:
      "In various fields such as automotive, aerospace, electronics, and healthcare, Sapthagiri's laser cutting services have helped many enterprises achieve improved production efficiency and cost reduction. Our customer cases have proven the reliability and efficiency of our services."
  },
  {
    shape: 'triangle',
    number: '3',
    title: 'PROFESSIONAL TEAM, FULL SUPPORT THROUGHOUT THE PROCESS',
    description:
      'Our customer service team is composed of experienced professionals who are always ready to answer your inquiries, provide technical support, and ensure that you have the best experience while using our laser cutting services.'
  }
];


const LaserCutting = () => {
  return (
    <div className={styles.laserCuttingSection}>
      <section className={styles.LaserCuttingHeader}>
        <h1>
           CNC LASER CUTTING 
        </h1>
      </section>
      <section className={styles.iconSection}>
        <img src={LaserIcon} alt="Sheet Metal Cutting Telangana" />
      </section>
       <section className={styles.IntroductionSection}>
        <p>
          At <strong style={{color:"#fc8500"}}>Sapthagiri Enterprises</strong>, we offer high-precision <strong>CNC Laser Cutting Services</strong> tailored 
          to your specifications. With advanced CNC technology and trained professionals, we deliver 
          intricate metal cuts with tight tolerances, fast turnaround times, and unmatched consistency. 
          Whether it's prototypes, small batches, or bulk production – our cutting-edge facility is 
          equipped to handle all.
        </p>
      </section>
      {/* Features */}
      <FeatureComponent 
        heading="Why Choose Our CNC Laser Cutting?"
        features={laserCuttingFeatures}
      />

      {/* Materials */}
      <section className={styles.MaterialSection}>
        <h2 className={styles.Materialhading}>Materials We Cut</h2>
      <div className={styles.MaterialInfo}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ChevronDown />}
            >
            <p className={styles.materialName} style={{color:' #007bff'}}>MILD STEEL</p>
          </AccordionSummary>
          <AccordionDetails className={styles.materialDetail}>
            
            <ul>
              <li>Cutting thickness supported: <strong>0.2mm to 16mm</strong> – highest among all listed materials.</li>
              <li>Most commonly used material in structural and industrial fabrication due to its strength and affordability.</li>
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
              <li>Cutting thickness supported: <strong>0.2mm to 8mm</strong>.</li>
              <li>deal for corrosion-resistant applications like kitchenware, medical equipment, and architectural panels.</li>
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
              <li>Cutting thickness supported: <strong>0.2mm to 6mm</strong>.</li>
              <li>Used in outdoor and structural components due to its zinc coating which protects against rust.</li>
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
              <li>Cutting thickness supported: <strong>0.2mm to 6mm</strong>.</li>
              <li>Often used for decorative and electrical applications due to its aesthetic finish and conductivity.</li>
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
              <li>Cutting thickness supported: <strong>0.2mm to 6mm</strong>.</li>
              <li>Challenging to cut due to high reflectivity but useful in electrical components for its excellent conductivity.</li>
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
              <li>Cutting thickness supported: <strong>0.2mm to 6mm</strong>.</li>
              <li>Lightweight and corrosion-resistant, making it ideal for aerospace, signage, and automotive parts.</li>
            </ul>
          </AccordionDetails>
        </Accordion>        
      </div>
    </section>
      {/* Applications */}
      <section className={styles.ApplicationSection}>
        <h3>What We Do?</h3>
        <div className={styles.laserGrid}>
          <div className={styles.laserCard}>
            <h4>Automotive Parts</h4>
            <p>Precision cutting for body panels, brackets, and exhaust components.</p>
          </div>
          <div className={styles.laserCard}>
            <h4>Industrial Enclosures</h4>
            <p>Custom cut-outs and vents for control panels and casings.</p>
          </div>
          <div className={styles.laserCard}>
            <h4>Architectural Decor</h4>
            <p>Laser-cut screens, panels, and signage for interior & exterior design.</p>
          </div>
        </div>
      </section>

      {/*process steps*/}
      <section className={styles.processSection}>
        {stepData.map((step, index) => (
          <ProcessStep key={index} step={step} />
        ))}
      </section>
   
      {/* CTA */}
      <section className={styles.laserCTA}>
        <h2>Need CNC Laser Cutting?</h2>
        <p>Get in touch with us to discuss your requirements and get a custom quote.</p>
        <Link to="/contact" >Contact Us</Link>
      </section>
    </div>
  )
}

export default LaserCutting
