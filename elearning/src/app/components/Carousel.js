import React from 'react'
const Carousel = () => {
    

    return (
        <div className='carousel container'>
          <div className='row'>
            <div className='col-12 col-md-6 carouselLeft'>
                <div className='carouselContent'>
                    <h1>Khởi đầu <br></br> sự nghiệp của bạn</h1>
                    <p>Trở thành lập trình <br></br> chuyên nghiệp tại cybersoft</p>
                    <div className='carouselBtn'>
                        <a className="btnXemKh" href="#" role="button">Xem khoá học</a>
                        <a className="btnTuVan" href="#" role="button">Tư vấn học</a>              
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className='carouselImg'></div>
            </div>
          </div>
        </div>
    )
}

export default Carousel