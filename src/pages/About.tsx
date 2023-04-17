import React from 'react'
import styles from '../styles/about.module.css'

const About = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>About Us</h1>
            <small className={styles.subHeader}>Learn more about us!</small>

            <p>
                The CyberBridge Initiative is a groundbreaking non-profit organization dedicated to empowering individuals from diverse backgrounds with the digital skills they need to thrive in today's technology-driven world. Our mission is to bridge the digital divide by providing access to state-of-the-art resources, comprehensive online courses, and hands-on workshops led by industry experts. We believe that access to technology and digital literacy are essential for personal and professional growth, and we are committed to fostering an inclusive, supportive community where learners of all ages and abilities can unlock their full potential. By partnering with local schools, community centers, and businesses, the CyberBridge Initiative aims to create a brighter future for everyone, one byte at a time.
            </p>
        </div>
    )

}

export default About