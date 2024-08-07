import { getCourseByCategoryApi } from '@/app/server/action/course';
import React from 'react'
import CourseCard from '@/app/components/CourseCard';
const DanhMucKhoaHoc = async (props) => {
    const { MaDanhMuc } = props.params;
    const dsKhoahoc = await getCourseByCategoryApi(MaDanhMuc);
    return (
        <>
            <div className='title-1 mb-5'>
                <h1 className='title_content container'>
                    {dsKhoahoc[0].danhMucKhoaHoc.tenDanhMucKhoaHoc}
                </h1>
            </div>
            <CourseCard dsKhoahoc={dsKhoahoc}></CourseCard>
        </>
    )
}

export default DanhMucKhoaHoc