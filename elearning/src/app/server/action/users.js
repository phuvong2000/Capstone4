import { httpApiElearning } from "@/app/util/setting";
import { TOKEN_AUTHOR, USER_LOGIN, getDataJsonStorage, setDataJsonStorage, setDataTextStorage, removeDataStorage } from "@/app/util/function";
import { message } from 'antd';

// Hàm đăng nhập
export const loginActionApi = async (taiKhoan, matKhau) => {
  try {
    const res = await httpApiElearning.post('/api/QuanLyNguoiDung/DangNhap', { taiKhoan, matKhau });
    setDataJsonStorage(USER_LOGIN, res.data);
    setDataTextStorage(TOKEN_AUTHOR, res.data.accessToken);
    message.success('Đăng nhập thành công');
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  } catch (error) {
    // console.error('Error during login:', error);
    // throw error;
    if (error.response && error.response.status === 500) {
      message.error('Tài khoản hoặc mật khẩu không đúng');
    } else {
      message.error('Đăng nhập thất bại');
    }
  }
};

// Hàm đăng xuất
export const handleLogout = () => {
  message.success('Đã đăng xuất thành công');
  removeDataStorage('accessToken');
  removeDataStorage('userLogin');
  setTimeout(() => {
    window.location.href = '/';
  }, 1000);
};