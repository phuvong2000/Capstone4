# Dự Án E-learning

## Giới Thiệu

Dự án E-learning là một nền tảng học trực tuyến cho phép người dùng đăng ký các khóa học, quản lý thông tin tài khoản, và tham gia các khóa học theo nhu cầu. Dự án được xây dựng trên React.js và Next.js, sử dụng các thư viện như Ant Design, Bootstrap, và CSS modules cho việc thiết kế giao diện người dùng.

## Thành viên
- Trần Trọng Hiếu
- Trần Phú Vọng

## Tính Năng

### Giao diện người dùng
- **Đăng ký và đăng nhập:** Người dùng có thể đăng ký tài khoản mới hoặc đăng nhập vào hệ thống để truy cập các chức năng cá nhân hóa.
- **Danh mục khoá học:** Người dùng có thể xem các khoá học được lọc theo danh mục có trong ứng dụng.
- **Chi tiết khoá học:** Người dùng có thể xem chi tiết một khoá học đã chọn.
- **Thông tin tài khoản:** Người dùng có thể xem và cập nhật thông tin cá nhân, bao gồm các khóa học đã đăng ký.
- **Tìm kiếm khóa học:** Cho phép người dùng tìm kiếm các khóa học dựa trên tên khoá học.

### Giao diện quản trị
- **Quản lý khoá học:** Người dùng có thể thêm khoá học, cập nhật, xoá (nếu khoá học chưa có hv nào đăng ký), ghi danh học viên vào khoá học, xác nhận học viên đăng ký khoá học, huỷ ghi danh học viên, thêm học viên vào khoá học dựa theo tên,...
- **Quản lý người dùng:** Người dùng có thể thêm tài khoản, sửa, xoá (nếu tài khoản đó chưa có đăng ký khoá học nào), đăng ký khoá học cho tài khoản, huỷ ghi danh học viên,...
- **Thông tin tài khoản:** Người dùng có thể xem và cập nhật thông tin cá nhân.

## Công Nghệ Sử Dụng

- **Frontend:**
  - React.js
  - Next.js
  - Ant Design
  - Bootstrap
  - SCSS/CSS Modules
- **Backend:**
  - Elearning API (do trung tâm cung cấp)
  - Axios cho việc gọi API
- **Xác thực:**
  - JWT (JSON Web Token) cho việc xác thực người dùng
- **Quản lý trạng thái:**
  - React hooks (`useState`, `useEffect`)

## Đường dẫn trang web: 
[Truy cập trang chủ dự án](https://capstone4-psi.vercel.app/)

## Video demo dự án 
[Truy cập video demo dự án](https://www.youtube.com/watch?v=jq4uoys1lcc)

## Cài Đặt

### Yêu Cầu Hệ Thống

- Node.js >= 14.x
- NPM hoặc Yarn

### Hướng Dẫn Cài Đặt

1. Clone repository về máy:
    ```bash
    git clone https://github.com/username/elearning.git
    cd elearning
    ```

2. Cài đặt các dependencies:
    ```bash
    npm install
    # hoặc
    yarn install
    ```

3. Tạo file `.env.local` và cấu hình các biến môi trường:
    ```plaintext
    NEXT_PUBLIC_API_BASE_URL=https://elearning0706.cybersoft.edu.vn/api
    NEXT_PUBLIC_JWT_SECRET=your_jwt_secret
    ```

4. Chạy dự án:
    ```bash
    npm run dev
    # hoặc
    yarn dev
    ```

5. Truy cập vào `http://localhost:3000` trên trình duyệt để xem ứng dụng.

## Hướng Dẫn Sử Dụng

- **Đăng ký tài khoản:** Người dùng cần điền thông tin cá nhân để tạo tài khoản mới.
- **Đăng nhập:** Sử dụng email và mật khẩu để đăng nhập vào hệ thống.
- **Tìm kiếm khóa học:** Sử dụng thanh tìm kiếm trên trang chủ để tìm kiếm các khóa học theo từ khóa.
- **Đăng ký khóa học:** Chọn khóa học muốn đăng ký và nhấn "Đăng ký" để thêm vào danh sách khóa học của bạn.
- **Xem thông tin tài khoản:** Truy cập trang "Thông tin tài khoản" để xem và cập nhật thông tin cá nhân cũng như các khóa học đã đăng ký.

## Đóng Góp

Chúng tôi hoan nghênh mọi đóng góp cho dự án. Nếu bạn muốn đóng góp, vui lòng tạo một "pull request" hoặc "issue" trên GitHub.

## Liên Hệ

Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, vui lòng liên hệ với chúng tôi qua email: [tranhieu4345@gmail.com](tranhieu4345@gmail.com).
