import React from 'react'
import Link from 'next/link'
import { getCourseByIdApi } from '@/app/server/action/course'
import FormUpdateCourese from '@/app/components/AdminForm/FormUpdateCourse'
const SuaKhoaHoc = async (props) => {
    const { tham_so } = props.params
    const course = await getCourseByIdApi(tham_so);
    // console.log(course)
    return (
        <div>
            <p>Id: {tham_so}</p>
            <h1 className='text-center mb-3'>Sửa khoá học</h1>
            <FormUpdateCourese course={course}></FormUpdateCourese>
            {/* Quay lại trang trước */}
            <Link href="/admin/quanlykhoahoc" className='text-decoration-none'>
                <i className="fa fa-arrow-left"></i> Quay lại trang trước
            </Link>
        </div>
    )
}

export default SuaKhoaHoc