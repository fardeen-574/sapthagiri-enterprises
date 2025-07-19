import React from 'react'
import styles from './Turning.module.css'
import {
  RotateCcw,
  Cog,
  PenTool,
  Timer,
  Workflow,
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FeatureComponent from '../../component/FeatureComponent/FeatureComponent';
import ProcessStep from '../../component/ProcessStep/ProcessStep';
import { TurningIcon } from '../../assets';
import { Link } from 'react-router-dom';

const cncTurningFeatures = [
  {
    icon: RotateCcw,
    title: "Precision Turning",
    points: [
      <>Tolerances up to <strong>±0.01 mm</strong></>,
      "Perfect for round and symmetrical components",
    ],
  },
  {
    icon: Cog,
    title: "Automated Lathes",
    points: [
      "CNC-controlled spindles with high RPM",
      "Supports both single-axis and multi-axis turning",
    ],
  },
  {
    icon: PenTool,
    title: "Custom Profiles",
    points: [
      "Internal/external threading, grooving, facing",
      "Supports contour turning and profile generation",
    ],
  },
  {
    icon: Timer,
    title: "Fast Production Cycles",
    points: [
      "High-speed turning with chip control",
      "Ideal for medium to high volume runs",
    ],
  },
  {
    icon: Workflow,
    title: "Flexible Material Range",
    points: [
      <>Handles <strong>MS, SS, Brass, Aluminum, Nylon</strong>, etc.</>,
      "Works with both bars and billets",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Superior Surface Finish",
    points: [
      "Can achieve Ra <strong>0.4 μm</strong> with appropriate inserts",
      "Reduced need for secondary polishing",
    ],
  },
];

const turningStepData = [
  {
    shape: 'circle',
    number: '1',
    title: 'HIGH-PRECISION TURNING, SMOOTH FINISH',
    description:
      'Our CNC turning machines deliver accurate, concentric results with excellent surface finishes. Ideal for producing cylindrical and complex rotational parts with precision, ensuring consistency and tight dimensional tolerances.'
  },
  {
    shape: 'square',
    number: '2',
    title: 'SUPPORT FOR VARIOUS MATERIALS & GEOMETRIES',
    description:
      'From steel and brass to plastics and alloys, our turning solutions accommodate a wide range of materials. Whether it’s small-diameter shafts or intricate threads, we adapt tooling for high efficiency and quality.'
  },
  {
    shape: 'triangle',
    number: '3',
    title: 'ENGINEERING EXPERTISE, END-TO-END SERVICE',
    description:
      'Our team provides complete support, from understanding your drawings to delivering finished parts. We ensure compatibility with your assemblies, apply necessary finishes, and help optimize your designs for turning efficiency.'
  }
];


const Turning = () => {
  return (
    <div className={styles.TurningSection}>
      {/* headersection */}
      <section className={styles.TurningHeader}>
        <h1>
            CNC TURNING
        </h1>
      </section>
      {/* iconsection */}
      <section className={styles.iconSection}>
        <img src={TurningIcon} alt="Sheet Metal Milling Telangana" />
      </section>
      <section className={styles.IntroductionSection}>
              <h1>
                Precision Turning for High-Performance Parts
              </h1>
               <p>
                At <strong style={{color:"#fc8500"}}>Sapthagiri Enterprises</strong>,we specialize in high-accuracy CNC turning solutions using advanced BFW machines. Our turning centers are capable of producing both simple and complex cylindrical components with exceptional precision and surface finish.

Whether it's a prototype or a large production batch, we ensure consistency, fast turnaround, and compliance with tight tolerances. From automotive shafts to electronic components and threaded parts, we deliver reliable results across every industry.
              </p>
            </section>
      
      {/* Feature Section */}
      <FeatureComponent
      heading="Why Choose Our CNC Turning Services?"
      features={cncTurningFeatures}
      />
      {/* capabilities */}
      <section className={styles.CapabilitiesSection}>
        <h2 className={styles.Capabilitiesheading}>Our CNC Turning Capabilities</h2>
      <div className={styles.CapabilitiesInfo}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ChevronDown />}
            >
            <h6 className={styles.CapabilitiesName}> Machines Used</h6>
          </AccordionSummary>
          <hr />
          <AccordionDetails className={styles.CapabilitiesDetail}>
            
            <p>
             We operate <strong>brand new BFW CNC Turning Machines</strong> equipped with 
             high-speed spindles and automated control systems. These machines can handle 
             a wide range of diameters with excellent consistency.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ChevronDown />}
            >
            <h6 className={styles.CapabilitiesName}>High Precision & Accuracy</h6>
          </AccordionSummary>
          <hr />
          <AccordionDetails className={styles.CapabilitiesDetail}>
            <p>
              Our turning operations achieve an impressive accuracy of <strong>±0.02mm</strong>, 
              ensuring dimensionally perfect parts for every application.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ChevronDown />}
          >
            <h6 className={styles.CapabilitiesName} >Supported Materials</h6>
          </AccordionSummary>
             <hr />
          <AccordionDetails className={styles.CapabilitiesDetail}>
            <p>
             We offer turning for a wide range of materials:<br />
            <strong>Metals:</strong> SS, MS, Aluminium, Brass, Copper, Bronze, Titanium<br />
            <strong>Plastics & Others:</strong> Acrylic, Backlite, Nylon, Teflon, etc.
            </p>
          </AccordionDetails>
        </Accordion>
      
      </div>
      </section>
      {/*process steps*/}
      <section className={styles.processSection}>
        {turningStepData.map((step, index) => (
          <ProcessStep key={index} step={step} />
        ))}
      </section>
      {/* CTA section */}
        <section className={styles.laserCTA}>
                <h2>Need CNC Milling?</h2>
                <p>Get in touch with us to discuss your requirements and get a custom quote.</p>
                <Link to="/contact" >Contact Us</Link>
        </section>
    </div>
  )
}

export default Turning