import React from 'react'
import styles from '../assets/css/Components/carousel.module.css'
const Carousel = () => {
    

    return (
        <div className={`${styles.carousel} container`}>
          <div className='row'>
            <div className={`col-12 col-md-6 ${styles.carouselLeft}`}>
                <div className={styles.carouselContent}>
                    <h1>Khởi đầu <br></br> sự nghiệp của bạn</h1>
                    <p>Trở thành lập trình <br></br> chuyên nghiệp tại cybersoft</p>
                    <div className={styles.carouselBtn}>
                        <a className="btn btn-primary" href="#" role="button">Xem khoá học</a>
                        <a className="btn btn-primary" href="#" role="button">Tư vấn học</a>              
                    </div>
                </div>
            </div>
            <div className={`col-12 col-md-6 ${styles.carouselImg}`} >
            </div>
          </div>
        </div>
    )
}

export default Carousel