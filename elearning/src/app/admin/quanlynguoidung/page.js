import React from 'react'
import Link from 'next/link'
import { getUserApi } from '@/app/server/action/users'
import TblNguoiDung from '@/app/components/AdminTable/TblNguoiDung';

const quanlynguoidung = async () => {
  const userList = await getUserApi();
  return (
    <div>
      <h1 className='mb-3 text-center'>Quản lý người dùng</h1>
      {/* Btn add user */}
      <div>
        <Link className="btn btn-primary mb-3" href="quanlynguoidung/themnguoidung" role="button">
          <i className="fa fa-plus"></i> Thêm người dùng
        </Link>
      </div>

      {/* Bảng danh sách */}
      <TblNguoiDung userData={userList}></TblNguoiDung>
    </div>
  )
}

export default quanlynguoidung