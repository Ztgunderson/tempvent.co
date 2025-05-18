'use client';

import { FC } from 'react';
import Products from '@/components/Products/Products';
import Testimonials from '@/components/Testimonials/Testimonials';
import Team from '@/components/Team/Team';
import Contact from '../components/Contact';
import ScrollIndicator from '@/components/ScrollIndicator';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Products />
      <div className={styles.divider} />
      <Testimonials />
      <div className={styles.divider} />
      <Team />
      <div className={styles.divider} />
      <Contact id="contact" />
    </main>
  );
};