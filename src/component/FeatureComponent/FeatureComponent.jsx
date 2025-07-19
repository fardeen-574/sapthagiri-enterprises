import React from 'react'
import styles from './FeatureComponent.module.css'
const FeatureComponent = ({heading,features}) => {
  return (
      <section className={styles.featureSection}>
      <h2 className={styles.Featureheading}>{heading}</h2>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <div className={styles.featureCard} key={index}>
            <feature.icon size={60} className={styles.featureIcon} />
            <h3>{feature.title}</h3>
            <ul>
              {feature.points.map((point, idx) => (
                <li key={idx}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureComponent