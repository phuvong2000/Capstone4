import React from 'react'
import styles from '../assets/css/Layout/carousel.module.css'
const Carousel = () => {
    

    return (
        <div className={`${styles.carousel} container`}>
          <div className='row'>
            <div className={`col-12 col-md-6 ${styles.carouselLeft}`}>
                <div className={`${styles.carouselContent}`}>
                    <h1>Khởi đầu <br></br> sự nghiệp của bạn</h1>
                    <p>Trở thành lập trình <br></br> chuyên nghiệp tại cybersoft</p>
                    <div className={`${styles.carouselBtn}`}>
                        <a className={`${styles.btnXemKh}`} href="#" role="button">Xem khoá học</a>
                        <a className={`${styles.btnTuVan}`} href="#" role="button">Tư vấn học</a>              
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className={`${styles.carouselImg}`}></div>
            </div>
          </div>
        </div>
    )
}

export default Carousel