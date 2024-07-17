import React from 'react'
import Link from 'next/link'
import styles from '../assets/css/Components/header.module.css'
const Header = () => {
    return (
        <header>
            <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <img src='/image/logo.png' className="img-fluid" style={{ maxWidth: '200px', height: 'auto' }} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse px-5" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" href="#" aria-current="page">Trang chủ
                                    <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" aria-current="page">Khoá học</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danh mục khoá học</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <Link className="dropdown-item" href="#">Tất cả khoá học</Link>
                                    <Link className="dropdown-item" href="#">Lập trình Backend</Link>
                                    <Link className="dropdown-item" href="#">Thiết kế Web</Link>
                                    <Link className="dropdown-item" href="#">Lập trình di động</Link>
                                    <Link className="dropdown-item" href="#">Lập trình Front end</Link>
                                    <Link className="dropdown-item" href="#">Lập trình Full Stack</Link>
                                    <Link className="dropdown-item" href="#">Tư duy lập trình</Link>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0 me-auto">
                            <input className="form-control" type="text" placeholder="Tìm kiếm" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                        <div>
                            {/* Button login, register */}
                            <Link className='btn btn-warning text-light mx-e' href="/users/dangnhap" role="button">Đăng nhập</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header