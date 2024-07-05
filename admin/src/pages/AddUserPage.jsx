import React from 'react'

const AddUserPage = () => {
  return (
    <div>
      <h1 className='mb-3'>Thêm người dùng</h1>
      {/* Add user form */}
      <form className='form-addUser'>
        <div className="row form-content">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">Tài khoản</label>
              <input type="text" name="taiKhoan" id="taiKhoan" className="form-control" aria-describedby="helpId" />
            </div>
            <div className="mb-3">
              <label className="form-label">Mật khẩu</label>
              <input type="passwork" name="matKhau" id="matKhau" className="form-control" aria-describedby="helpId" />
            </div>
            <div className="mb-3">
              <label className="form-label">Họ tên</label>
              <input type="text" name="hoTen" id="hoTen" className="form-control" aria-describedby="helpId" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" id="email" className="form-control" aria-describedby="helpId" />
            </div>
            <div className="mb-3">
              <label className="form-label">Số điện thoại</label>
              <input type="text" name="sdt" id="sdt" className="form-control" aria-describedby="helpId" />
            </div>
            <div className="mb-3">
              <label className="form-label">Loại người dùng</label>
              <select className="form-select form-select-lg" name="userType" id="userType">
                <option value="GV">Giáo vụ</option>
                <option value="HV">Học viên</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-btn mt-3 d-flex justify-content-between">
          <div>
            <a href="#"> <i className="fa fa-angle-double-left"></i> Trở lại</a>
          </div>
          <div>
            <button type="button" className="btn btn-success mx-2">
              Thêm
            </button>
            <button type="button" className="btn btn-primary mx-2">
              Lưu
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddUserPage