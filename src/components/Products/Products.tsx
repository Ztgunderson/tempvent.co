'use client';

import { FC, useState } from 'react';
import styles from './Products.module.css';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  features: string[];
}

const Products: FC<{ id: string }> = ({ id }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({
    'fourten': 0,
    'fourtwelve': 0,
    '2_2512': 0,
  });

  const handlePrevImage = (productId: string) => {
    setCurrentImageIndex((prev) => {
      const product = products.find(p => p.id === productId);
      if (!product) return prev;
      
      const imageCount = product.images.length;
      const newIndex = (prev[productId] - 1 + imageCount) % imageCount;
      return { ...prev, [productId]: newIndex };
    });
  };

  const handleNextImage = (productId: string) => {
    setCurrentImageIndex((prev) => {
      const product = products.find(p => p.id === productId);
      if (!product) return prev;
      
      const imageCount = product.images.length;
      const newIndex = (prev[productId] + 1) % imageCount;
      return { ...prev, [productId]: newIndex };
    });
  };

  const products: Product[] = [
    {
      id: 'fourten',
      title: '4x10 Vent',
      description: 'Fits into 4x10 vents',
      price: '19.99',
      images: [
        '/images/products/4x10-left.svg',
        '/images/products/4x10-right.svg',
        '/images/products/4x10-top.svg',
        '/images/products/4x10-bottom.svg'
      ],
      features: []
    },
    {
      id: '2_2512',
      title: '2.25x12 Vent',
      description: 'Fits into 2.25x12 vents',
      price: '19.99',
      images: [
        '/images/products/2_25x12-left.svg',
        '/images/products/2_25x12-right.svg',
        '/images/products/2_25x12-top.svg',
        '/images/products/2_25x12-bottom.svg'
      ],
      features: []
    },
    {
      id: 'fourtwelve',
      title: '4x12 Vent',
      description: 'Fits into 4x12 vents',
      price: '24.99',
      images: [
        '/images/products/4x12-left.svg',
        '/images/products/4x12-right.svg',
        '/images/products/4x12-top.svg',
        '/images/products/4x12-bottom.svg'
      ],
      features: []
    },
    {
      id: 'custom',
      title: 'Custom Vent',
      description: 'Custom size for your specific needs',
      price: 'Contact for Quote',
      images: ['/images/products/custom-sizes.png'],
      features: [
        'Custom Sizing Available',
        'Made to Order',
      ]
    },
    {
      id: 'sticker',
      title: 'Replacable Branded Sticker',
      description: 'Custom branded stickers for your vents',
      price: '9.99',
      images: ['/images/products/4x10_logo.png'],
      features: [
        'Custom Branding',
        'Easy to Apply',
        'Professional Look',
      ]
    },
    {
      id: 'filter',
      title: 'Replacable Filter',
      description: 'Universal filter for all vent sizes',
      price: '14.99',
      images: ['/images/products/filter.svg'],
      features: [
        'High-Quality Material',
        'Easy to Replace',
        'Dust Prevention'
      ]
    }
  ];

  return (
    <section id={id} className={styles.products}>
      <div className={styles.productsTitle}>Our Temporary Covers</div>
      <div className={styles.marketingPitch}>
        <div className={styles.mediaContainer}>
          <video 
            className={styles.productVideo}
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src="/videos/product-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <h2 className={styles.slogan}>Temporary Covers, Cleaner Than All The Others</h2>

        <div className={styles.commonFeatures}>
          <ul className={styles.featureList}>
            <li>Replacable Branded Filter and Sticker Included</li>
            <li>Cover Holes</li>
            <li>Reuseable</li>
            <li>Low Profile</li>
            <li>2-Step Dust Prevention System</li>
          </ul>
        </div>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImageContainer}>
              <img 
                src={product.images[currentImageIndex[product.id] || 0]} 
                alt={product.title} 
                className={styles.productImage}
              />
              {product.images.length > 1 && (
                <div className={styles.imageNavigation}>
                  <button 
                    className={styles.navButton} 
                    onClick={() => handlePrevImage(product.id)}
                  >
                    &lt;
                  </button>
                  <button 
                    className={styles.navButton} 
                    onClick={() => handleNextImage(product.id)}
                  >
                    &gt;
                  </button>
                </div>
              )}
            </div>
            <div className={styles.productDetails}>
              <h3>{product.title}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <ul className={styles.productFeatures}>
                {product.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{product.price.startsWith('Contact') ? product.price : `$${product.price}`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;