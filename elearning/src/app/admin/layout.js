"use client"
import React from 'react'
import Sidebar from '../components/AdminSidebar/Sidebar'
import styles from '../assets/css/Components/sidebar.module.css'
import Header from '../components/AdminHeader/Header'
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
const layout = ({children}) => {
  return (
    <Provider store={store}>
        <Sidebar></Sidebar>
        <div id={styles.main}>
            <Header></Header>
            {children}
        </div>
    </Provider>
  )
}

export default layout