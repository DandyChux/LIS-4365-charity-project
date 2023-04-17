import React, { useRef, useEffect } from 'react'
import styles from '../styles/paymentModal.module.css'

interface IPaymentModal {
    showModal: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const PaymentModal: React.FC<IPaymentModal> = ({ showModal, onClose, children }) => {

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains( e.target as Node )) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {

            document.removeEventListener('mousedown', handleClickOutside);

        }

    }, []);

    return (
        <>
            {showModal ? (
                <div className={styles.modalOverlay}>
                    <div ref={modalRef} className={styles.modal}>
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    )

}

export default PaymentModal