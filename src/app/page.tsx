'use client';

import Products from '@/components/Products/Products';
import Testimonials from '@/components/Testimonials/Testimonials';
import Team from '@/components/Team/Team';
import Contact from '../components/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Products id="products-section" />
      <div className={styles.divider} />
      <Testimonials />
      <div className={styles.divider} />
      <Team />
      <div className={styles.divider} />
      <Contact id="contact" />
    </main>
  );
};