import styles from './MainLayout.module.css';
import { Outlet } from 'react-router'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
export default function MainLayout() {
  return (
    <>
        <Header/>
        <main className={styles.mainLayout}>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}
