import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className={styles.icon} />
          </a>
        </div>
        <div className={styles.footerInfo}>
          <p>© 2024 Your Company. All rights reserved.</p>
          <p>1234 Address St, City, State, 12345</p>
          <p>Email: info@yourcompany.com | Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
