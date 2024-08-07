import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../assets/css/Layout/layout.module.css';
const layout = ({children}) => {
  return (
    <div className='profMain'>
        <Header></Header>
        <div className={`${styles.main}`}>
            {children}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default layout