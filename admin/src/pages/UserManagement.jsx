import React from 'react'

const UserManagement = () => {
  return (
    <div>
      <h1 className='mb-3'>Quản lý người dùng</h1>
      {/* Btn add user */}
      <button type="button" className="btn btn-primary mb-3">
        <i className="fa fa-plus"></i> Thêm người dùng
      </button>
      {/* Form search */}
      <form className='search-box d-flex mb-3'>
        <div>
          <input
            type="text"
            name="search-user"
            id="search-user"
            className="form-control"
            placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
            aria-describedby="helpId"
            style={{ width: 350 }}
          />
        </div>
        <button type="button" className="btn btn-primary mx-3">
          Tìm
        </button>
      </form>
      {/* Table user management */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tài khoản</th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Email</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>tranhieu123</td>
              <td>*********</td>
              <td>Trần Trọng Hiếu</td>
              <td>tranhieu123@gmail.com</td>
              <td>0976567654</td>
              <td>
                {/* Button ghi danh */}
                <button type="button" className="btn btn-success mx-2">
                  Ghi danh
                </button>
                {/* Button sửa */}
                <button type="button" className="btn btn-warning mx-2">
                  Sửa
                </button>
                {/* Button xoá */}
                <button type="button" className="btn btn-danger mx-2">
                  Xoá
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pagging */}
    </div>
  )
}

export default UserManagement