import styles from './MainLayout.module.css';
import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../components/Header/Header'

export default function MainLayout() {
  return (
    <>
        <Header/>
        <main className={styles.mainLayout}>
            <Outlet/>
        </main>
        {/* <Footer/> */}
    </>
  )
}
