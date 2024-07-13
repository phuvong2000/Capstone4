import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='header-admin d-flex justify-content-end'>
            <p className='d-flex align-items-center px-2 py-0'>Xin chào Hiếu!</p>
            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://i.pravatar.cc?1" width={50} className='rounded-circle' alt="" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" href="#">Cập nhật thông tin</Link></li>
                    <li><Link className="dropdown-item" href="#">Đăng xuất</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header