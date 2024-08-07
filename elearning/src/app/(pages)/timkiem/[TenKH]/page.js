import { getCourseByNameApi } from '@/app/server/action/course';
import React from 'react';
import Link from 'next/link';

const TimKiem = async (props) => {
    const { TenKH } = props.params;
    const dsKHTimKiem = await getCourseByNameApi(TenKH, 1, 10);

    return (
        <div className='searchPage'>
            <div className='title-1 mb-5'>
                <h1 className='title_content container'>Danh sách khoá học tìm kiếm</h1>
            </div>
            <div className='container'>
                {
                    dsKHTimKiem.items?.map((item, index) => {
                        return (
                            <div className="card mb-3" key={index}>
                                <div className="row g-0">
                                    <div className="cardImg col-md-3">
                                        <img src={item.hinhAnh} className="img-fluid rounded-start" alt={item.tenKhoaHoc} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.tenKhoaHoc}</h5>
                                            <p className="detailCourse card-text">{item.moTa}</p>
                                            <p className="card-text"><small className="text-muted">{item.ngayTao}</small></p>
                                            <div className="btn-container">
                                                <Link className="btn btn-primary" href={`/chitiet/${item.maKhoaHoc}`} role="button">Xem chi tiết</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default TimKiem;
