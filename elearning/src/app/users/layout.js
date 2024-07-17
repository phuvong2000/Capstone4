import React from 'react'
import styles from '../assets/css/Pages/dangnhap.module.css'
const loginLayout = ({children}) => {
  return (
    <div className={`${styles.loginBody}`}>
        {children}
    </div>
  )
}

export default loginLayout