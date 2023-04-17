import React, { useState } from 'react'
import styles from '../styles/shop.module.css'
import PaymentForm from './PaymentForm';
import PaymentModal from './PaymentModal';

interface IProductCard {
    title: string;
    description: string;
    price: number;
    buttonText: string;
}

const ProductCard: React.FC<IProductCard> = ({ title, description, price, buttonText }) => {
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleFormSubmit = async (data: object) => {

        handleCloseModal();

    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardText}>{description}</p>
                    <small className={styles.cardText}>${price}</small>
                    <button className={styles.cardButton} onClick={handleButtonClick}>{buttonText}</button>
                </div>
            </div>
            <PaymentModal showModal={showModal} onClose={handleCloseModal}>
                <PaymentForm productName={title} price={price} onSubmit={handleFormSubmit} />
            </PaymentModal>
        </>
    )

}

export default ProductCard