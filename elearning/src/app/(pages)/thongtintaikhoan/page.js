import RegisteredCourse from '@/app/components/UserForm/RegisteredCourse';
import UserProfile from '@/app/components/UserForm/UserProfile';
import { getUserInfo } from '@/app/server/action/users';
import React from 'react'

const ThongTinTaiKhoan = async () => {
    const thongTinTaiKhoan = await getUserInfo();
    let doiTuong = 'Học viên';
    if(thongTinTaiKhoan.maLoaiNguoiDung === 'GV'){
        doiTuong = 'Giảng viên'
    }

    return (
        <div className='prof'>
            <div className='profTitle'>
                <div className='container'>
                    <h1>Thông tin cá nhân</h1>
                    <p>Thông tin học viên</p>
                </div>
            </div>
            <div className='profContent container'>
                <div className='row'>
                    <div className='profContentLeft col-12 col-md-3'>
                        <img src="https://i.pravatar.cc?1" width={150} className='rounded-circle mb-3' alt="" />
                        <h5>Đối tượng người dùng</h5>
                        <p>{doiTuong}</p>
                        <button className='btn btn-success mb-3'>Hồ sơ cá nhân</button>
                    </div>
                    <div className='profContentRight col-12 col-md-9'>
                        <div>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Thông tin cá nhân</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="course-tab" data-bs-toggle="tab" data-bs-target="#course" type="button" role="tab" aria-controls="course" aria-selected="false">Khoá học</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <UserProfile thongTin={thongTinTaiKhoan}></UserProfile>
                                </div>
                                <div className="tab-pane fade" id="course" role="tabpanel" aria-labelledby="course-tab">
                                    <RegisteredCourse khoaHocThamGia={thongTinTaiKhoan}></RegisteredCourse>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThongTinTaiKhoan