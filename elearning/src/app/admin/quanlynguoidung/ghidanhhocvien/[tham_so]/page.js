// "use client"
import React from 'react'
import Link from 'next/link'
import { getCourseWaitingApi } from '@/app/server/action/users';
import { cookies } from 'next/headers'
const GhiDanhHocVien = async (props) => {
    const { tham_so } = props.params;
    const khChoXetDuyet = await getCourseWaitingApi(tham_so);
    console.log(khChoXetDuyet);
    return (
        <div>
            <h1>
                Ghi danh học viên
                : {tham_so}
            </h1>

            {/* Search khoá học */}

            {/* Table chờ xác thực */}

            {/* Table học viên đã tham gia khoá học */}

            <Link href="/admin/quanlynguoidung" className='text-decoration-none'>
                <i className="fa fa-arrow-left"></i> Quay lại trang trước
            </Link>
        </div>
    )
}

export default GhiDanhHocVien