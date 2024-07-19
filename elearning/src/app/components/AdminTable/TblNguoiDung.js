"use client"
import React from 'react'
import Link from 'next/link'
import { Space, Table, Tag } from 'antd';

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        render: (text, record, index) => <a>{index + 1}</a>,
    },
    {
        title: 'Tài khoản',
        dataIndex: 'taiKhoan',
        key: 'taiKhoan',
    },
    {
        title: 'Họ tên',
        dataIndex: 'hoTen',
        key: 'hoTen',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'soDt',
        key: 'soDt',
    },
    {
        title: 'Mã loại người dùng',
        dataIndex: 'maLoaiNguoiDung',
        key: 'maLoaiNguoiDung',
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

const TblNguoiDung = (props) => {
    const { userList } = props;
    return (
        <Table columns={columns} dataSource={userList} rowKey="taiKhoan" scroll={{ x: 'max-content' }} />
    )
}

export default TblNguoiDung