"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCourseApi } from '@/app/server/action/course';
import TblKhoaHoc from '@/app/components/AdminTable/TblKhoaHoc';

const quanlykhoahoc = () => {
    // Lấy ds khoá học
    // const courseList = await getCourseApi();
    const [courseList, setCourseList] = useState();
    useEffect(() => {
        getCourseApi().then(result => {
            setCourseList(result);
        })
    }, [])
    return (
        <div>
            <h1 className='mb-3 text-center'>Quản lý khoá học</h1>
            {/* Btn add course */}
            <Link className="btn btn-primary mb-3" href="quanlykhoahoc/themkhoahoc" role="button">
                <i className="fa fa-plus"></i> Thêm khoá học
            </Link>

            {/* Bảng danh sách */}
            <TblKhoaHoc courseData={courseList}></TblKhoaHoc>
        </div>
    )
}

export default quanlykhoahoc