import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <h1>Bookstore CMS</h1>
        <ul className={styles.navlinks}>
          <li className={styles.links}>
            <Link to="/">BOOKS</Link>
          </li>
          <li className={styles.linksCateg}>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <div className={styles.profile} />
    </nav>
  );
}
export default Navigation;
