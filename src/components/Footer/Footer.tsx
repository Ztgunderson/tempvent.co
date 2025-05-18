import { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© {new Date().getFullYear()} Arkin & Gunderson LLC</p>
        <p>Patent Pending</p>
        <p>Contact: info@tempvents.co</p>
      </div>
    </footer>
  );
};

export default Footer;