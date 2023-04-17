import React, { PropsWithChildren } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import styles from '../styles/layout.module.css'

export default function Layout() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div id ='detail' className={styles.content}>
                <Outlet />
            </div>
        </div>
    )
}