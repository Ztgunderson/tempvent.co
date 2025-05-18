import { FC } from 'react';
import styles from './Features.module.css';

const Features: FC<{ id: string }> = ({ id }) => {
  const features = [
    {
      title: '2-Step Dust Prevention System',
      description: 'Proprietary dual-layer filtration process eliminates 98% of particulate matter',
      icon: '🛡️',
      steps: [
        'Stage 1: Coarse particle capture',
        'Stage 2: Fine dust absorption'
      ]
    },
    {
      title: 'Universal Sizing',
      description: 'Available in two industry-standard dimensions',
      icon: '📏',
      sizes: [
        '4"x10"',
        '2.25"x12"'
      ]
    },
    {
      title: 'OSHA-Compliant Design',
      description: 'Engineered for jobsite safety',
      icon: '✅',
      compliance: [
        'Visible hazard markings',
        'Rounded safety edges'
      ]
    }
  ];

  return (
    <section id={id} className={styles.features}>
      <div className={styles.heroHook}>
        <h1>Temporary Covers, Cleaner than all the Others</h1>
        <p className={styles.tagline}>
          Industrial-Strength Ventilation Protection Solutions<br /> 
          for Professional Contractors & Home Renovators
        </p>
      </div>

      <div className={styles.featuresGrid}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            
            {feature.steps && (
              <div className={styles.featureDetails}>
                <h4>Process Stages:</h4>
                <ul>
                  {feature.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            )}

            {feature.sizes && (
              <div className={styles.featureDetails}>
                <h4>Available Sizes:</h4>
                <div className={styles.sizeGrid}>
                  {feature.sizes.map((size, index) => (
                    <div key={index} className={styles.sizeCard}>
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {feature.compliance && (
              <div className={styles.featureDetails}>
                <h4>Safety Features:</h4>
                <ul>
                  {feature.compliance.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
   </section>
  )
};

export default Features;