'use client';

import { useCart } from '@/context/CartContext';
import { CheckoutForm } from '@/components/CheckoutForm';
import styles from './Cart.module.css';
import { FiX } from 'react-icons/fi';

export const Cart = ({ onClose }: { onClose: () => void }) => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h3>Your Cart ({cartItems.length})</h3>
          <button onClick={onClose} className={styles.closeButton}>
            <FiX size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className={styles.emptyCart}>Your cart is empty</p>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cartItems.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>
                      ${item.price.toFixed(2)}
                    </span>
                    <div className={styles.quantityControls}>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className={styles.quantityButton}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className={styles.quantityNumber}>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className={styles.quantityButton}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.itemTotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeButton}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cartFooter}>
              <div className={styles.totalContainer}>
                <span>Total:</span>
                <span className={styles.totalAmount}>${total.toFixed(2)}</span>
              </div>
              <CheckoutForm clearCart={clearCart} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};