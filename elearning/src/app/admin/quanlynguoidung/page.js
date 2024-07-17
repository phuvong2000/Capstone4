"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUserListApi } from '@/app/redux/reducers/usersReducer';


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
const quanlynguoidung = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    const actionThunk = getUserListApi();
    dispatch(actionThunk);
  }, []);
  return (
    <div>
      <h1 className='mb-3'>Quản lý người dùng</h1>
      {/* Btn add user */}
      <Link className="btn btn-primary mb-3" href="themnguoidung" role="button">
        <i className="fa fa-plus"></i> Thêm người dùng
      </Link>
      {/* Form search */}
      <form className="search-box mb-5">
        <div className="input-group" style={{ maxWidth: 600 }}>
          <input
            type="text"
            name="tennguoidung"
            id="tennguoidung"
            className="form-control"
            placeholder="Nhập vào mã người dùng hoặc tên người dùng"
            aria-describedby="helpId"
          />
          <button type="button" className="btn btn-primary">
            Tìm
          </button>
        </div>
      </form>

      {/* Bảng danh sách */}
      <Table columns={columns} dataSource={userList} rowKey="taiKhoan" scroll={{ x: 'max-content' }} />
    </div>
  )
}

export default quanlynguoidung