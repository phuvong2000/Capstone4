import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
    courseList: [
        {
            "maKhoaHoc": "",
            "biDanh": "javascriptt",
            "tenKhoaHoc": "Javascriptt",
            "moTa": "Rất hay",
            "luotXem": 100,
            "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/javascriptt_gp01.png",
            "maNhom": "gp01",
            "ngayTao": "01/07/2024",
            "soLuongHocVien": 0,
            "nguoiTao": {
                "taiKhoan": "admin_elearning",
                "hoTen": "Phong Nguyễn",
                "maLoaiNguoiDung": "GV",
                "tenLoaiNguoiDung": "Giáo vụ"
            },
            "danhMucKhoaHoc": {
                "maDanhMucKhoahoc": "FrontEnd",
                "tenDanhMucKhoaHoc": "Lập trình Front end"
            }
        },
        {
            "maKhoaHoc": "123478",
            "biDanh": "lap-trinh-elearing-2",
            "tenKhoaHoc": "lập trình elearing 2",
            "moTa": "lập trình hay",
            "luotXem": 100,
            "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-elearing-2_gp01.jpg",
            "maNhom": "gp01",
            "ngayTao": "30/06/2024",
            "soLuongHocVien": 0,
            "nguoiTao": {
                "taiKhoan": "pencilkg123",
                "hoTen": "Trần Đăng Khoa",
                "maLoaiNguoiDung": "GV",
                "tenLoaiNguoiDung": "Giáo vụ"
            },
            "danhMucKhoaHoc": {
                "maDanhMucKhoahoc": "BackEnd",
                "tenDanhMucKhoaHoc": "Lập trình Backend"
            }
        },
        {
            "maKhoaHoc": "19872623",
            "biDanh": "lap-trinh-game-di-dong-new",
            "tenKhoaHoc": "Lập trình game di động new",
            "moTa": "b",
            "luotXem": 100,
            "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-game-di-dong-new_gp01.png",
            "maNhom": "gp01",
            "ngayTao": "29/06/2024",
            "soLuongHocVien": 0,
            "nguoiTao": {
                "taiKhoan": "admin1",
                "hoTen": "Hoang Phu",
                "maLoaiNguoiDung": "GV",
                "tenLoaiNguoiDung": "Giáo vụ"
            },
            "danhMucKhoaHoc": {
                "maDanhMucKhoahoc": "backEnd",
                "tenDanhMucKhoaHoc": "Lập trình Backend"
            }
        },
    ]
}

const courseReducer = createSlice({
    name: "courseReducer",
    initialState,
    reducers: {
        getCourseListAction: (state, action) => {
            state.courseList = action.payload;
        }
    }
});

export const { getCourseListAction } = courseReducer.actions

export default courseReducer.reducer

// ------------------------------------------------------------------------ //
const tokenCyber = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NSIsIkhldEhhblN0cmluZyI6IjI1LzExLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTczMjQ5MjgwMDAwMCIsIm5iZiI6MTcwMjMxNDAwMCwiZXhwIjoxNzMyNjQwNDAwfQ._Cum2zMqV8nsbUfpCOe0ILWE_GvP8V8FQnmOR8PRB44';
export const getCourseListApi = () => {
    return async (dispatch) => {

        const res = await axios.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc', {
            headers: {
                TokenCybersoft: tokenCyber
            }
        });
        const actionPayload = getCourseListAction(res.data.content);
        dispatch(actionPayload);
    }
};