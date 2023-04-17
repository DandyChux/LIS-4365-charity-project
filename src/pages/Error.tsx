import React from 'react'
import { useRouteError } from 'react-router-dom'
import styles from '../styles/error.module.css'

const ErrorPage: React.FC = () => {

    const error = useRouteError() as any;
    console.error(error);

    return (
        <div className={styles.container}>
            <h1>Oops!</h1>
            <p>Sorry an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )

}

export default ErrorPage