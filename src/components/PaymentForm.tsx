import React, { useState } from 'react'
import styles from '../styles/paymentForm.module.css'

interface IPaymentForm {
    productName: string;
    price: number;
    onSubmit: (data: object) => void;
}

const PaymentForm: React.FC<IPaymentForm> = ({ productName, price, onSubmit }) => {

    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvc, setCardCvc] = useState('');
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/payment.php', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            mode: 'no-cors',
            body: JSON.stringify({ productName, price, cardNumber, cardName, cardExpiry, cardCvc })
        });

        const result = await response.json();
        console.log(result);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formHeader}>Payment for {productName}</h3>
            <div className={styles.formGroup}>
                <label htmlFor="cardName" className={styles.formLabel}>Card Name</label>
                <input type="text" id="cardName" value={cardName} className={styles.formInput} onChange={(e) => setCardName(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="cardNumber" className={styles.formLabel}>Card Number</label>
                <input type="text" maxLength={16} id="cardNumber" value={cardNumber} className={styles.formInput} onChange={(e) => setCardNumber(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="cardExpiry" className={styles.formLabel}>Card Expiry</label>
                <input type="date" id="cardExpiry" value={cardExpiry} className={styles.formInput} onChange={(e) => setCardExpiry(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="cardCvc" className={styles.formLabel}>CVC</label>
                <input type="number" maxLength={3} id="cardCvc" value={cardCvc} className={styles.formInput} onChange={(e) => setCardCvc(e.target.value)} />
            </div>
            <button className={styles.formbutton} type='submit'>
                Pay ${price}
            </button>
        </form>
    )

}

export default PaymentForm