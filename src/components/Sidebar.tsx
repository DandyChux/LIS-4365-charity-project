import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/sidebar.module.css'

const Sidebar: React.FC = () => {
    
        return (
            <>
                <nav className={styles.nav}>
                    <span className={styles.navHeader}>CyberBridge Initiative</span>
                    <ul className={styles.navList}>
                        <li className={styles.linkItem}>
                            <NavLink to="/about" className={styles.navLink}>About</NavLink>
                        </li>
                        <li className={styles.linkItem}>
                            <NavLink to="/shop" className={styles.navLink}>Shop</NavLink>
                        </li>
                        <li className={styles.linkItem}>
                            <NavLink to="/contact" className={styles.navLink}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </>
        )
    
}

export default Sidebar