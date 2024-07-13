"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseListApi } from '@/app/redux/reducers/courseReducer';

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        render: (text, record, index) => <a>{index + 1}</a>,
    },
    {
        title: 'MaKhoaHoc',
        dataIndex: 'maKhoaHoc',
        key: 'maKhoaHoc',
    },
    {
        title: 'TenKhoaHoc',
        dataIndex: 'tenKhoaHoc',
        key: 'tenKhoaHoc',
    },
    {
        title: 'HinhAnh',
        dataIndex: 'hinhAnh',
        key: 'hinhAnh',
        render: (text) => <img src={text} alt="course" style={{ width: '50px' }} />,
    },
    {
        title: 'LuotXem',
        dataIndex: 'luotXem',
        key: 'luotXem',
    },
    {
        title: 'NguoiTao',
        dataIndex: ['nguoiTao', 'hoTen'],
        key: 'nguoiTao',
    },
    {
        title: 'Thao tác',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Ghi danh</a>
                <a>Sửa</a>
                <a>Xoá</a>
            </Space>
        ),
        responsive: ['sm'],
    },
];

const page = () => {
    const dispatch = useDispatch();
    const { courseList } = useSelector((state) => state.courseReducer);
    useEffect(() => {
        const actionThunk = getCourseListApi();
        dispatch(actionThunk);
    }, [])
    return (
        <div>
            <h1 className='mb-3'>Quản lý khoá học</h1>
            {/* Btn add course */}
            <Link className="btn btn-primary mb-3" href="/quanlykhoahoc/themkhoahoc" role="button"><i className="fa fa-plus"></i> Thêm khoá học</Link>

            {/* Form search */}
            <form className="search-box mb-5">
                <div className="input-group" style={{ maxWidth: 600 }}>
                    <input
                        type="text"
                        name="search-course"
                        id="search-course"
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

export default page