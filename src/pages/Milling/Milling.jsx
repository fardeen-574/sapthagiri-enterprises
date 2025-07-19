import React from 'react'
import styles from './Milling.module.css' 
import { MillingIcon} from '../../assets'
import {
  Drill,
  Cpu,
  AppWindow,
  TimerReset,
  Layers3,
  BadgeCheck,
  ChevronDown
} from "lucide-react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FeatureComponent from '../../component/FeatureComponent/FeatureComponent';
import ProcessStep from '../../component/ProcessStep/ProcessStep';
import { Link } from 'react-router-dom';

const cncMillingFeatures = [
  {
    icon: Drill,
    title: "High Precision Milling",
    points: [
      <>Tolerance as tight as <strong>±0.005 mm</strong></>,
      "Perfect for complex surfaces and fine details",
    ],
  },
  {
    icon: Cpu,
    title: "Multi-Axis Capability",
    points: [
      "3-axis to 5-axis milling support",
      "Suitable for undercuts and intricate geometry",
    ],
  },
  {
    icon: AppWindow,
    title: "CAD/CAM Integration",
    points: [
      "Supports DXF, STEP, IGES, and other formats",
      "Ensures seamless transition from design to machining",
    ],
  },
  {
    icon: TimerReset,
    title: "Rapid Material Removal",
    points: [
      "Efficient milling for aluminum, steel, plastic, etc.",
      "Reduces production cycle time significantly",
    ],
  },
  {
    icon: Layers3,
    title: "Versatile Applications",
    points: [
      "Ideal for dies, molds, jigs, and custom components",
      "Supports prototyping to mass production",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Surface Finish Quality",
    points: [
      "Delivers smooth finishes up to Ra 0.8 μm",
      "Minimizes need for post-machining operations",
    ],
  },
];
const millingStepData = [
  {
    shape: 'circle',
    number: '1',
    title: 'PRECISION MACHINING, CONSISTENT RESULTS',
    description:
      'Our CNC milling machines offer precise, computer-controlled cutting for complex components. With tight tolerances and repeatability, we ensure every part is machined to exact specifications, improving product quality and reliability.'
  },
  {
    shape: 'square',
    number: '2',
    title: 'VERSATILE MATERIAL HANDLING, FLEXIBLE PRODUCTION',
    description:
      'From aluminum and stainless steel to plastics and brass, our CNC milling capabilities cover a wide range of materials. We adapt our tooling and approach based on project needs, allowing efficient handling of both prototypes and bulk orders.'
  },
  {
    shape: 'triangle',
    number: '3',
    title: 'SKILLED ENGINEERS, COMPLETE PROJECT SUPPORT',
    description:
      'Our experienced team supports you from design review to final production. We assist with material selection, tolerance optimization, and surface finishing, ensuring your CNC milled components meet functional and aesthetic expectations.'
  }
];



const Milling = () => {
  return (
    <div className={styles.MillingSection}>
      {/* headersection */}
        <section className={styles.MillingHeader}>
          <h1>
              CNC MILLING
          </h1>
        </section>
        {/* iconsection */}
      <section className={styles.iconSection}>
        <img src={MillingIcon} alt="Sheet Metal Milling Telangana" />
      </section>
        {/* Intro Section */}
      <section className={styles.IntroductionSection}>
        <h1>
          Precision Machining for Complex Components
        </h1>
         <p>
          At <strong style={{color:"#fc8500"}}>Sapthagiri Enterprises</strong>,we offer high-precision 
          CNC milling services tailored to meet your exact specifications. Whether it's prototyping or 
          production runs, our advanced milling machines deliver tight tolerances, smooth finishes, and 
          complex geometries with unmatched accuracy.Our milling capabilities support a variety of materials 
          including Aluminum, Steel, Brass, Copper, and Plastics, making us a versatile partner across 
          multiple industries.
        </p>
      </section>
      {/* feature section */}
      <FeatureComponent
      heading="Why Choose Our CNC Milling Services?"
      features={cncMillingFeatures}/>
      {/* capabilities */}
      <section className={styles.CapabilitiesSection}>
        <h2 className={styles.Capabilitiesheading}>Precision CNC Milling Services</h2>
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
              We use brand new BFW CNC Milling Machines equipped with all bed sizes, 
                allowing us to handle a wide range of components from small precision parts to 
                large industrial elements. Our machines are designed for reliability, consistency, 
                and superior finish.
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
              Our CNC milling operations achieve a machining accuracy of ±0.02mm, 
                ensuring tight tolerances and excellent repeatability for every part, 
                no matter the complexity or batch size.
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
              We machine a diverse range of metals and non-metals, enabling flexibility across industries:
            </p>
            <ul>
              <li><strong>Metals:</strong> Stainless Steel (SS), Mild Steel (MS), Aluminium (ALU), Brass, Copper, Bronze, Titanium</li>
              <li><strong>Plastics & Others:</strong> Acrylic, Backlite, Nylon, Teflon, and more</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      
      </div>
      </section>
      {/*process steps*/}
      <section className={styles.processSection}>
        {millingStepData.map((step, index) => (
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

export default Milling