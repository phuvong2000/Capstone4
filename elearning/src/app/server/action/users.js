import { httpApiElearning } from "@/app/util/setting";
import { TOKEN_AUTHOR, USER_LOGIN, getDataJsonStorage, setDataJsonStorage, setDataTextStorage } from "@/app/util/function";

export const loginActionApi = async (taiKhoan, matKhau) => {
    try {
      const res = await httpApiElearning.post('/api/QuanLyNguoiDung/DangNhap', { taiKhoan, matKhau });
      setDataJsonStorage(USER_LOGIN, res.data);
      setDataTextStorage(TOKEN_AUTHOR, res.data.accessToken);
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };