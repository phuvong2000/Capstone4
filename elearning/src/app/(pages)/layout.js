import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/scss/main.scss'
const layout = ({children}) => {
  return (
    <div className='profMain'>
        <Header></Header>
        <div>
            {children}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default layout