'use client';

import { FC, useState } from 'react';
import styles from './Contact.module.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrbpnaan'; // ← replace XYZ with your ID

const Contact: FC<{ id: string }> = ({ id }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,      // for reply‑to header in Formspree emails
          _subject: 'New Contact Us Message'
        })
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id={id} className={styles.contact}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <span className={styles.spinner}></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      {status === 'success' && (
        <p style={{ color: 'green', textAlign: 'center', marginTop: '1rem' }}>
          Thanks for your message! We’ll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#dc3545', textAlign: 'center', marginTop: '1rem' }}>
          Oops! Something went wrong. Please try again later.
        </p>
      )}
    </section>
  );
};

export default Contact;