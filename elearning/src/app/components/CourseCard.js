"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Rate, Pagination } from 'antd';

const CourseCard = (props) => {
    const { dsKhoahoc } = props;

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(12); // Số khoá học mỗi trang

    // Calculate total pages
    const total = dsKhoahoc.length;

    // Get current page data
    const currentData = dsKhoahoc.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='container'>
            <h4 className='mb-3'>Các khoá học phổ biến</h4>
            <div className="row">
                {/* Render khoá học */}
                {
                    currentData.map((course, index) => {
                        return (
                            <div className="course col-12 col-md-6 col-lg-4 col-xl-3" key={index}>
                                <Link href={`/chitiet/${course.maKhoaHoc}`} className='cardBox'>
                                    <div className='mb-3 card'>
                                        <img className="card-img-top" src={course.hinhAnh} alt="Title" />
                                        <div className='card-body'>
                                            <h5 className='card-title'>{course.tenKhoaHoc}</h5>
                                            <Rate allowHalf defaultValue={4.5} disabled /><span className="card-text px-3">({course.luotXem})</span>
                                        </div>
                                        <div className="ribbon left">Bán chạy</div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
            <Pagination
                className='d-flex justify-content-center py-5'
                current={currentPage}
                pageSize={pageSize}
                total={total}
                onChange={handlePageChange}
                showSizeChanger={false} 
            />
        </div>
    );
};

export default CourseCard;
