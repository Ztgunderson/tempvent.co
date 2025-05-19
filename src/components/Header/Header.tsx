'use client';
import { FC } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Cart } from '@/components/Cart';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Header.module.css';
import Image from 'next/image';

interface NavLink {
  text: string;
  href?: string;
  id?: string;
}

const Header: FC = () => {
  const { setIsCartOpen, cartItems, isCartOpen } = useCart();

  const navigationLinks: NavLink[] = [
    { href: '#products', text: 'Product' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/logo/Logo2_cropped.png"
            alt="Temporary Covers, Cleaner Than All The Others"
            width={50}
            height={50}
            className={styles.logo}
          />
          <div className={styles.logoText}>
            <h1 className={styles.logoTitle}>Temporary Covers, Cleaner Than All The Others</h1>
            <span className={styles.logoUrl}>TempVent.co</span>
          </div>
        </Link>
      </div>

      <nav>
        <ul className={styles.navList}>
          {navigationLinks.map((link) => (
            <li key={link.href || link.id}>
              {link.href ? (
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.text}
                </Link>
              ) : (
                <ScrollLink
                  to={link.id || ''}
                  smooth={true}
                  duration={500}
                  className={styles.navLink}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.text}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Cart button hidden but functionality preserved */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className={styles.cartButton}
        style={{ display: 'none' }}
      >
        Cart ({cartItems.length})
      </button>
      
      {/* Render Cart only when isCartOpen is true */}
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </header>
  );
};

export default Header;