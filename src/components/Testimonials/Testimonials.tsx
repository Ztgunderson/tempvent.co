import { FC } from 'react';
import styles from './Testimonials.module.css';

const Testimonials: FC = () => {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Customers Say</h2>
      <div className={styles.testimonialGrid}>
        <div className={styles.testimonialCard}>
          <p className={styles.testimonialText}>
            "As a General Contractor for over 25 years, I’ve encountered numerous challenges in maintaining clean HVAC systems during construction. Traditional methods of plastic sheathing or screens often fell short especially during flooring installation

            This new product is a game changer, its unique design allows it to remain in place throughout the entire construction process, including the flooring process – a stage where most covers fail or need removal. Not only does it effectively block dust and debris, but also

            ensures that the HVAC system remains uncontaminated, reducing the need for post construction cleaning.

            The ease of installation and durability of this product will significantly improve our workflow and certainly increases customer satisfaction. It’s a must have for any construction or remodeling project aiming for efficiency and cleanliness."
          </p>
          <p className={styles.testimonialAuthor}>- Kevin Urso, General Contractor</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;