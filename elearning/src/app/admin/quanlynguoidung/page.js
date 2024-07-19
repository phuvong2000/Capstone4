import React from 'react'
import Link from 'next/link'
import { getUserApi } from '@/app/server/action/users'
import TblNguoiDung from '@/app/components/AdminTable/TblNguoiDung';

const quanlynguoidung = async () => {
  const userList = await getUserApi();
  return (
    <div>
      <h1 className='mb-3'>Quản lý người dùng</h1>
      {/* Btn add user */}
      <Link className="btn btn-primary mb-3" href="quanlynguoidung/themnguoidung" role="button">
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
          <button type="submit" className="btn btn-primary">
            Tìm
          </button>
        </div>
      </form>

      {/* Bảng danh sách */}
      <TblNguoiDung userList={userList}></TblNguoiDung>

    </div>
  )
}

export default quanlynguoidung