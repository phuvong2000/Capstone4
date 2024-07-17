import { httpApiElearning } from "@/app/util/setting";

export const getCourseApi = async () => {
    const res = await httpApiElearning.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc');
    return res.data;
}

export const addCourseApi = async (courseData) => {
    const res = await httpApiElearning.post('/api/QuanLyKhoaHoc/ThemKhoaHoc', courseData);
    return res.data;
};