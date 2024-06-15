import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import NavLinks from '../../features/Navigation/ui/NavLinks';
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo__link}>
        <img src={logo} alt="Logo" />
      </Link>
      <NavLinks/>
      {/* <Logout/> */}
    </header>
  );
};

export default Header;
