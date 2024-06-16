import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Frame 85.svg';
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__top}>
            <Link to="/" className={styles.footer__logo__link}>
                <img src={logo} alt="Logo" />
            </Link>
            <div className={styles.footer__top__socials}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
            </div>
        </div>
        <div className={styles.footer__bottom}>
            <p className={styles.footer__bottom__text}>
                © 2021 Spark. Все права защищены.
            </p>
        </div>
    </footer>
  );
};

export default Footer;
