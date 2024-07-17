"use client"
import React from 'react'
import Link from 'next/link'
import { Space, Table, Tag } from 'antd';
import { getCourseApi } from '@/app/server/action/course';
const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        render: (text, record, index) => <a>{index + 1}</a>,
    },
    {
        title: 'Mã khoá học',
        dataIndex: 'maKhoaHoc',
        key: 'maKhoaHoc',
    },
    {
        title: 'Tên khoá học',
        dataIndex: 'tenKhoaHoc',
        key: 'tenKhoaHoc',
    },
    {
        title: 'Hình ảnh',
        dataIndex: 'hinhAnh',
        key: 'hinhAnh',
        render: (text) => <img src={text} alt="course" style={{ width: '50px' }} />,
    },
    {
        title: 'Lượt xem',
        dataIndex: 'luotXem',
        key: 'luotXem',
    },
    {
        title: 'Người tạo',
        dataIndex: ['nguoiTao', 'hoTen'],
        key: 'nguoiTao',
    },
    {
        title: 'Thao tác',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a className='btn btn-primary'>Ghi danh</a>
                <a className='btn btn-warning'>Sửa</a>
                <a className='btn btn-danger'>Xoá</a>
            </Space>
        ),
    },
];


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
                    <button type="button" className="btn btn-primary">
                        Tìm
                    </button>
                </div>
            </form>

            {/* Bảng danh sách */}
            <Table columns={columns} dataSource={courseList} rowKey="maKhoaHoc" scroll={{ x: 'max-content' }} />
        </div>
    )
}

export default quanlykhoahoc