import React from 'react'
import Link from 'next/link'
import { getCourseNotRegis, getCourseWaitingApi, getEnrolledCourseApi } from '@/app/server/action/users';
import TblGhiDanh from '@/app/components/AdminTable/TblGhiDanh';
const GhiDanhHocVien = async (props) => {
    const { tham_so } = props.params;
    const khChoXetDuyet = await getCourseWaitingApi(tham_so);
    const khDaGhiDanh = await getEnrolledCourseApi(tham_so);
    const khChuaGhiDanh = await getCourseNotRegis(tham_so);
    return (
        <div>
            <h1 className='text-center pb-3'>
                Ghi danh học viên
            </h1>

            {/* Table ghi danh và chờ xét duyệt */}
            <TblGhiDanh khDaGhiDanh={khDaGhiDanh} khChoXetDuyet={khChoXetDuyet} khChuaGhiDanh={khChuaGhiDanh} taiKhoan={tham_so}></TblGhiDanh>

            {/* Quay về */}
            <Link href="/admin/quanlynguoidung" className='text-decoration-none'>
                <i className="fa fa-arrow-left"></i> Quay lại trang trước
            </Link>
        </div>
    )
}

export default GhiDanhHocVien