import React from 'react'
import Link from 'next/link'
import { getCourseApi } from '@/app/server/action/course';
import TblKhoaHoc from '@/app/components/AdminTable/TblKhoaHoc';

const quanlykhoahoc = async () => {
    // Lấy ds khoá học
    const courseList = await getCourseApi();
    return (
        <div>
            <h1 className='mb-3'>Quản lý khoá học</h1>
            {/* Btn add course */}
            <Link className="btn btn-primary mb-3" href="quanlykhoahoc/themkhoahoc" role="button">
                <i className="fa fa-plus"></i> Thêm khoá học
            </Link>
            {/* Form search */}
            <form className="search-box mb-5">
                <div className="input-group" style={{ maxWidth: 600 }}>
                    <input
                        type="text"
                        name="tenkhoahoc"
                        id="tenkhoahoc"
                        className="form-control"
                        placeholder="Nhập vào mã khoá học hoặc tên khoá học"
                        aria-describedby="helpId"
                    />
                    <button type="submit" className="btn btn-primary">
                        Tìm
                    </button>
                </div>
            </form>

            {/* Bảng danh sách */}
            <TblKhoaHoc courseList={courseList}></TblKhoaHoc>
        </div>
    )
}

export default quanlykhoahoc