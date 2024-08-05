import React from 'react'

const Instructor = () => {
    return (
        <div className='container instructor-container'>
            <div className='title-2'>
                <h3 className='title_content'>Giảng viên tiềm năng</h3>
            </div>
            <div className='instructor-content'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-3 instructor-items'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://wp.w3layouts.com/studious/wp-content/themes/studious/assets/images/team2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Aida Joe</h5>
                                <p className="card-text">Thiết kế UI/UX</p>
                            </div>
                            <div className='overlay'>
                                <i className="fab fa-facebook" />
                                <i className="fab fa-twitter" />
                                <i className="fab fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 instructor-items'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://wp.w3layouts.com/studious/wp-content/themes/studious/assets/images/team1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Olive Yew</h5>
                                <p className="card-text">Chuyên gia thiết kế</p>
                            </div>
                            <div className='overlay'>
                                <i className="fab fa-facebook" />
                                <i className="fab fa-twitter" />
                                <i className="fab fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 instructor-items'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://wp.w3layouts.com/studious/wp-content/themes/studious/assets/images/team3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Teri Dac</h5>
                                <p className="card-text">Tư duy lập trình</p>
                            </div>
                            <div className='overlay'>
                                <i className="fab fa-facebook" />
                                <i className="fab fa-twitter" />
                                <i className="fab fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 instructor-items'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://wp.w3layouts.com/studious/wp-content/themes/studious/assets/images/team4.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Olive Yew</h5>
                                <p className="card-text">Thiết kế website</p>
                            </div>
                            <div className='overlay'>
                                <i className="fab fa-facebook" />
                                <i className="fab fa-twitter" />
                                <i className="fab fa-instagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructor