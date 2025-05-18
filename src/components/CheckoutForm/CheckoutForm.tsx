'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './CheckoutForm.module.css';
import { FiLoader } from 'react-icons/fi';

export const CheckoutForm = ({ clearCart }: { clearCart: () => void }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { cartItems } = useCart();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const orderData = {
        customer: customerInfo,
        items: cartItems,
        total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };

      const response = await fetch('/api/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      clearCart();
      setCustomerInfo({ name: '', email: '', address: '' });
      alert('Order placed successfully! We will contact you shortly.');
    } catch (err) {
      setError('Failed to place order. Please try again.');
      console.error('Order submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.checkoutForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          required
          value={customerInfo.name}
          onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          required
          value={customerInfo.email}
          onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="address">Shipping Address</label>
        <textarea
          id="address"
          placeholder="123 Main St, City, Country"
          required
          value={customerInfo.address}
          onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <FiLoader className={styles.spinner} />
            Processing...
          </>
        ) : (
          'Complete Order'
        )}
      </button>
    </form>
  );
};