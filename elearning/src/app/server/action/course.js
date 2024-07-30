import { httpApiElearning } from "@/app/util/setting";
import { message } from "antd";

// Lấy danh sách khoá học
export const getCourseApi = async () => {
    const res = await httpApiElearning.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc');
    return res.data;
}

// Thêm khoá học
// export const addCourseApi = async (courseData) => {
//     try {
//         const res = await httpApiElearning.post('/api/QuanLyKhoaHoc/ThemKhoaHoc', courseData);
//         if (res.data) {
//             // Gọi hàm upload hình ảnh
//             await uploadImgApi(res.data.hinhAnh.name, res.data.hinhAnh);
//             message.success('Thêm khóa học thành công!');
//         }
//     } catch (error) {
//         console.log(error)
//     }
// };

// Thêm khoá học upload hình
export const addCourseApi = async (courseData) => {
    try{
        const res = await httpApiElearning.post('/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh', courseData);
        return res.data;
    }catch (error){
        console.log(error)
    }
}

// Lấy danh mục khoá học
export const getCategoryCourse = async () => {
    try {
        const res = await httpApiElearning.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
        return res.data;
    } catch (error) {
        console.log('Error: ', error)
    }
}

// Upload hình
// export const uploadImgApi = async (tenKhoaHoc, file) => {
//     try {
//         let frm = new FormData();
//         frm.append('file', file);
//         frm.append('tenKhoaHoc', tenKhoaHoc);

//         const res = await httpApiElearning.post('/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc', frm);
//         return res.data;
//     } catch (error) {
//         console.log('Error:', error);
//         throw error;
//     }
// };

// Xoá khoá học
export const delCourseApi = async (maKH) => {
    try {
        const res = await httpApiElearning.delete('/api/QuanLyKhoaHoc/XoaKhoaHoc', {
            params: { maKhoaHoc: maKH }
        });
        message.success('Xoá khoá học thành công')
        return res.data;
    } catch (error) {
        console.log("Error: ", error)
    }
}

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
        console.log('Error: ', error);
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
        console.log('Error: ', error);
    }
}
