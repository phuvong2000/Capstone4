import React from 'react'
import styles from '../assets/css/Pages/dangnhap.module.css'
import Header from '../components/Header'
const loginLayout = ({ children }) => {
  return (
    <div className={styles.loginPage}>
      <Header></Header>
      <div className={`${styles.loginBody}`}>
        {children}
      </div>
    </div>
  )
}

export default loginLayout