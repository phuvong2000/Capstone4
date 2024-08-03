"use client"
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import Link from 'next/link';
import styles from '../../assets/css/Pages/dangnhap.module.css'
import { loginActionApi } from '@/app/server/action/users';
import { useRouter } from 'next/navigation';
const dangnhap = () => {
  const router = useRouter();
  const onFinish = async (values) => {
    await loginActionApi(values.taiKhoan, values.matKhau);
    message.success('Đăng nhập thành công')
    router.push('/');
  };
  return (
    <div className={`${styles.login}`}>
      <Form
        name="normal_login"
        className={`login-form ${styles.loginForm}`}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1 className='text-center mb-3'>Đăng nhập</h1>
        {/* Tài khoản */}
        <Form.Item
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: 'Không được để trống tài khoản!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tài khoản" />
        </Form.Item>
        {/* Mật khẩu */}
        <Form.Item
          name="matKhau"
          rules={[
            {
              required: true,
              message: 'Không được để trống mật khẩu!',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Mật khẩu' />
        </Form.Item>
        <Form.Item className={styles.loginFormCheckbox}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link className={`login-form-forgot ${styles.loginFormForgot}`} href="">
            Quên mật khẩu
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={`login-form-button mb-2 ${styles.loginFormButton}`}>
            Đăng nhập
          </Button>
          Hay <Link href="/users/dangky" className={styles.loginRegis}>đăng ký ngay!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default dangnhap;