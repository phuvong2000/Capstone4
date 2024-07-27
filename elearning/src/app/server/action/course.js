import { httpApiElearning } from "@/app/util/setting";
import { message } from "antd";

export const getCourseApi = async () => {
    const res = await httpApiElearning.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc');
    return res.data;
}

export const addCourseApi = async (courseData) => {
    const res = await httpApiElearning.post('/api/QuanLyKhoaHoc/ThemKhoaHoc', courseData);
    return res.data;
};

/* ---------------------------------- Ghi danh khoá học ---------------------------------- */
// Ghi danh khoá học (13.2.4)
export const registerCourseApi = async (maKH, TK) => {
    try {
        const res = await httpApiElearning.post('/api/QuanLyKhoaHoc/GhiDanhKhoaHoc', {
            maKhoaHoc: maKH,
            taiKhoan: TK
        })
        message.success('Ghi danh thành công')
        return res.data;
    } catch (error) {
        message.error(error.response.data)
        console.log('Error: ',error);
    }
}

// Huỷ ghi danh (13.2.5)
export const cancelCourseApi = async (maKH, TK) => {
    try {
        const res = await httpApiElearning.post('/api/QuanLyKhoaHoc/HuyGhiDanh', {
            maKhoaHoc: maKH,
            taiKhoan: TK
        })
        message.success('Huỷ ghi danh thành công')
        return res.data;
    } catch (error) {
        message.error(error.response.data)
        console.log('Error: ',error);
    }
}
