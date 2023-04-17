import React, { useState } from 'react'
import styles from '../styles/form.module.css'

const ContactForm: React.FC = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetch('/api/formSubmit.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            body: JSON.stringify(form)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log('email sent successfully');
                    alert('Email sent succesfully! We will get back to you as soon as possible!');
                } else {
                    console.log('Error sending email: ', data.message)
                }
            })
            .catch(error => {
                console.error('Error: ', error);
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })

    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input type="text" required name="name" id="name" onChange={handleChange} className={styles.formInput} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input type="email" required name="email" id="email" onChange={handleChange} className={styles.formInput} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea name="message" required id="message" cols={30} rows={10} onChange={handleChange} className={styles.formInput} />
            </div>

            <button type='submit' className={styles.formButton}>
                Submit
            </button>
        </form>
    )

}

export default ContactForm