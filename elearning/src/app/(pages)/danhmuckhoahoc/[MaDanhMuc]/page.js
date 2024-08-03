import { getCourseByCategoryApi } from '@/app/server/action/course';
import React from 'react'
import Link from 'next/link';
import { Rate, Pagination } from 'antd';
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
            <div className='container'>
                <h4 className='mb-3'>Các khoá học phổ biến</h4>
                <div className="row">
                    {/* Render khoá học */}
                    {
                        dsKhoahoc?.map((course, index) => {
                            return (
                                <div className="course col-12 col-md-6 col-lg-4 col-xl-3" key={index}>
                                    <Link href={`/chitiet/${course.maKhoaHoc}`} className='cardBox'>
                                        <div className='mb-3 card'>
                                            <img className="card-img-top" src={course.hinhAnh} alt="Title" />
                                            <div className='card-body'>
                                                <h5 className='card-title'>{course.tenKhoaHoc}</h5>
                                                <Rate allowHalf defaultValue={4.5} /><span className="card-text px-3">({course.luotXem})</span>
                                            </div>
                                            <div className="ribbon left">Bán chạy</div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
                <Pagination className='d-flex justify-content-center py-5' defaultCurrent={1} total={50} />
            </div>
        </>
    )
}

export default DanhMucKhoaHoc