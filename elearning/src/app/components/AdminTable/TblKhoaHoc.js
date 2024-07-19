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
const TblKhoaHoc = (props) => {
    const { courseList } = props;
    return (
        <Table columns={columns} dataSource={courseList} rowKey="maKhoaHoc" scroll={{ x: 'max-content' }} />
    )
}

export default TblKhoaHoc