"use client"
import React, { useEffect, useState } from 'react';
import { Rate, Pagination, Input, message } from 'antd';
import { getUserInfo } from '@/app/server/action/users';
import { cancelCourseApi } from '@/app/server/action/course';

const { Search } = Input;

const RegisteredCourse = (props) => {
    const { khoaHocThamGia } = props;
    const khoaHocGhiDanh = khoaHocThamGia.chiTietKhoaHocGhiDanh;
    const [khoaHoc, setKhoaHoc] = useState(khoaHocGhiDanh);
    const [filteredCourses, setFilteredCourses] = useState(khoaHocGhiDanh);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const pageSize = 3; // Số lượng khóa học hiển thị trên mỗi trang

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {
        try {
            const result = await getUserInfo();
            setKhoaHoc(result.chiTietKhoaHocGhiDanh);
            setFilteredCourses(result.chiTietKhoaHocGhiDanh);
        } catch (error) {
            console.error('Error fetching user list:', error);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (value) => {
        setSearchText(value);
        if (value) {
            const filtered = khoaHoc.filter(course =>
                course.maKhoaHoc.includes(value) || course.tenKhoaHoc.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCourses(filtered);
            setCurrentPage(1); // Reset to first page when searching
        } else {
            setFilteredCourses(khoaHoc);
        }
    };

    const handleCancelCourse = async (maKhoaHoc) => {
        if (window.confirm('Bạn có chắc chắn muốn huỷ không?')) {
            try {
                await cancelCourseApi(maKhoaHoc, khoaHocThamGia.taiKhoan);
                await fetchUserInfo();
            } catch (error) {
                message.error('Xóa khoá học không thành công');
            }
        }
    };

    const indexOfLastCourse = currentPage * pageSize;
    const indexOfFirstCourse = indexOfLastCourse - pageSize;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    return (
        <div className='registeredCourse'>
            <div className='row'>
                <div className='col-12 col-sm-6'>
                    <h3 className='mb-4'>Các khoá học đã tham gia</h3>
                </div>
                {/* Form search */}
                <div className='col-12 col-sm-6'>
                    <Search
                        placeholder="Tìm kiếm mã hoặc tên khoá học"
                        onSearch={handleSearch}
                        onChange={(e) => handleSearch(e.target.value)}
                        value={searchText}
                        enterButton
                    />
                </div>
            </div>
            {
                currentCourses.map((item, index) => (
                    <div className='registeredItem' key={index}>
                        <div className='row mb-3'>
                            <div className='col-3 courseImg text-center'>
                                <img src={item.hinhAnh} alt='hình ảnh khoá học'></img>
                            </div>
                            <div className='col-9 courseContent'>
                                <h5>{item.tenKhoaHoc}</h5>
                                <p>{item.moTa}</p>
                                <div className="row">
                                    <div className="col-12 col-sm-8 d-flex align-items-center mb-2 mb-sm-0">
                                        <Rate allowHalf defaultValue={item.danhGia} />
                                        <i className="fa fa-eye ms-3"></i>
                                        <span>({item.luotXem})</span>
                                    </div>
                                    <div className="col-12 col-sm-4 d-flex justify-content-sm-end">
                                        <button className="btn btn-danger" onClick={() => handleCancelCourse(item.maKhoaHoc)}>Huỷ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={filteredCourses.length}
                onChange={handlePageChange}
                className='mt-3'
            />
        </div>
    );
}

export default RegisteredCourse;
