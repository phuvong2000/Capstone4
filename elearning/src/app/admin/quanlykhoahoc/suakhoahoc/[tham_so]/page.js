import React from 'react'
import Link from 'next/link'
import { getCourseByIdApi } from '@/app/server/action/course'
import FormUpdateCourese from '@/app/components/AdminForm/FormUpdateCourse'
const SuaKhoaHoc = async (props) => {
    const { tham_so } = props.params
    const course = await getCourseByIdApi(tham_so);
    return (
        <div style={{ padding: '32px' }}>
            <h1 style={{ marginBottom: '40px' }} className='text-center' >Sửa khoá học</h1>
            <FormUpdateCourese course={course}></FormUpdateCourese>
            {/* Quay lại trang trước */}
            <Link href="/admin/quanlykhoahoc" className='text-decoration-none mb-3'>
                <i className="fa fa-arrow-left"></i> Quay lại trang trước
            </Link>
        </div>
    )
}

export default SuaKhoaHoc