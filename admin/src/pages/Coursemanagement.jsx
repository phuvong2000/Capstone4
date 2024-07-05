import React from 'react'

const Coursemanagement = () => {
    return (
        <div>
            <h1 className='mb-3'>Quản lý khoá học</h1>
            {/* Btn add course */}
            <button type="button" className="btn btn-primary mb-3">
                <i className="fa fa-plus"></i> Thêm khoá học
            </button>
            {/* Form search */}
            <form className='search-box d-flex mb-3'>
                <div>
                    <input
                        type="text"
                        name="search-course"
                        id="search-course"
                        className="form-control"
                        placeholder="Nhập vào mã khoá học hoặc tên khoá học"
                        aria-describedby="helpId"
                        style={{ width: 350 }}
                    />
                </div>
                <button type="button" className="btn btn-primary mx-3">
                    Tìm
                </button>
            </form>
            {/* Table course management */}
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã khoá học</th>
                            <th scope="col">Tên khoá học</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Lượt xem</th>
                            <th scope="col">Người tạo</th>
                            <th scope="col">Số điện thoại</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>LTFE</td>
                            <td>Lập trình frontend</td>
                            <td><img src="https://akdemy.net/wp-content/uploads/2023/02/react-new.png" alt="" width={100} /></td>
                            <td>123456</td>
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

export default Coursemanagement