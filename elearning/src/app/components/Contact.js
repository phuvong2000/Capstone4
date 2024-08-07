import React from 'react'

const Contact = () => {
    return (
        <div className='container contact-container'>
            <div className='row'>
                <div className='contact-left col-12 col-md-5'>
                    <img src='https://wp.w3layouts.com/studious/wp-content/themes/studious/assets/images/image.png' alt='...'></img>
                </div>
                <div className='contact-right col-12 col-md-7'>
                    <div className='contact-content'>
                        <h1>
                            Không chắc chắn bắt đầu từ đâu?
                            <br></br>
                            Liên hệ ngay, chúng tôi sẽ giúp bạn
                        </h1>
                        <p>
                            Nếu bạn có bất kỳ câu hỏi hay cần hỗ trợ, xin vui lòng liên hệ với chúng tôi qua biểu mẫu dưới đây. Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất có thể.
                        </p>
                        <button className='btn btn-danger'>Đăng ký ngay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact