import React from 'react'
import ContactForm from '../components/ContactForm'
import styles from '../styles/contact.module.css'

const Contact: React.FC = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Contact Us</h1>
            <small className={styles.subHeader}>Send us a message!</small>

            <ContactForm />
        </div>
    )

}

export default Contact