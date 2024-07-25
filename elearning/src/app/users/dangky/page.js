"use client"
import React, { useState } from 'react'
import styles from '../../assets/css/Pages/dangnhap.module.css'
import Link from 'next/link';
import { signupActionApi } from '@/app/server/action/users';
import { LockOutlined, UserOutlined, MailOutlined, IdcardOutlined, PhoneOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from 'antd';
const { Option } = Select;

const dangky = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    try {
      const userRegis = {
        taiKhoan: values.taiKhoan,
        matKhau: values.matKhau,
        hoTen: values.hoTen,
        soDT: values.soDT,
        maNhom: values.maNhom,
        email: values.email
      }
      signupActionApi(userRegis);
      form.resetFields();
    } catch {

    }
    form.resetFields();
  };
  return (
    <div className={styles.login}>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <h1 className='text-center mb-3'>Đăng Ký</h1>
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
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Mật khẩu' />
        </Form.Item>

        <Form.Item
          name="xacNhanMatKhau"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Không được để trống mật khẩu!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('matKhau') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không trùng khớp!'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Nhập lại mật khẩu' />
        </Form.Item>

        <Form.Item
          name="hoTen"
          rules={[
            {
              required: true,
              message: 'Không được để trống họ tên!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder='Họ tên' prefix={<IdcardOutlined />} />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Email không chính xác!',
            },
            {
              required: true,
              message: 'Email không được để trống!',
            },
          ]}
        >
          <Input placeholder='Email' prefix={<MailOutlined />} />
        </Form.Item>

        <Form.Item
          name="soDT"
          rules={[
            {
              required: true,
              message: 'Số điện thoại không được để trống !',
            },
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: 'Số điện thoại không hợp lệ!',
            }
          ]}
        >
          <Input
            style={{
              width: '100%',
            }}
            placeholder='Số điện thoại'
            prefix={<PhoneOutlined />}
          />
        </Form.Item>

        <Form.Item
          name="maNhom"
          rules={[
            {
              required: true,
              message: 'Chọn mã nhóm!',
            },
          ]}
        >
          <Select placeholder="Mã nhóm">
            <Option value="GP01">GP01</Option>
            <Option value="GP02">GP02</Option>
            <Option value="GP03">GP03</Option>
          </Select>
        </Form.Item>


        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Đồng ý với các điều khoản trên')),
            },
          ]}
        >
          <Checkbox>
            Tôi đã đọc các <a href="">điều khoản</a>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={`login-form-button mb-2 ${styles.loginFormButton}`}>
            Đăng ký
          </Button>
          Đã có tài khoản <Link href="/users/dangnhap" className={styles.loginRegis}>đăng nhập</Link>
        </Form.Item>
      </Form>
    </div>
  )
}

export default dangky