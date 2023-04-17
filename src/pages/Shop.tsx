import React from "react"
import styles from '../styles/shop.module.css'
import ProductCategory, { IProduct } from "../components/ProductCategory"

const Shop = () => {

    const onlineCourses: IProduct[] = [
        {
            title: 'Intro to Coding Course',
            description: 'A beginner-friendly online course covering the basics of programming languages like Python, Javascript, and HTML/CSS.',
            price: 49,
            buttonText: 'Enroll Now',
        },
        {
            title: 'Cybersecurity Fundamentals',
            description: 'An online course covering essential cybsersecurity topics, such as securing networks, protecting personal information, and identifying common threats.',
            price: 59,
            buttonText: 'Enroll Now',
        },
        {
            title: 'Mobile App Development',
            description: 'An online course teaching participants how to design and develop mobile applications for Android and iOS using tools like React Native and Flutter.',
            price: 79,
            buttonText: 'Enroll Now',
        },
        {
            title: 'Data Analytics Bootcamp',
            description: 'A comprehensive course designed to teach participants how to analyze, visualize, and interpret data using tools like Excel, SQL, and Tableau.',
            price: 99,
            buttonText: 'Enroll Now',
        },
    ]

    const workshops: IProduct[] = [
        {
            title: 'Web Design Workshop',
            description: 'A hands-on workshop teaching participants how to create visually appealing, responsive websites using modern design principles.',
            price: 79,
            buttonText: 'Join Workshop',
        },
        {
            title: 'Game Development Workshop',
            description: 'An immersive workshop that guides learners through the process of creating their own video games using platforms like Unity and Unreal Engine.',
            price: 119,
            buttonText: 'Join Workshop',
        },
        {
            title: 'Virtual Tech Mentorship',
            description: 'One-on-one virtual mentorship sessions with experienced tech professionals, tailored to individual needs and goals.',
            price: 30,
            buttonText: 'Book Session',
        }
    ]

    return (
        <div className={styles.container}>
            <h1>Shop</h1>

            <ProductCategory categoryName="Online Courses" products={onlineCourses} />
            <ProductCategory categoryName="Workshops" products={workshops} />
        </div>
    )

}

export default Shop