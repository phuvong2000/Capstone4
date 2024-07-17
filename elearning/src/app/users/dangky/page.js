"use client"
import React, { useState } from 'react'
import styles from '../../assets/css/Pages/dangnhap.module.css'
import Link from 'next/link';
import { LockOutlined, UserOutlined, MailOutlined, IdcardOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from 'antd';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const dangky = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div className={styles.login}>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
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
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Không được để trống họ tên!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder='Họ tên' prefix={<IdcardOutlined/>} />
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
          name="soDt"
          rules={[
            {
              required: true,
              message: 'Số điện thoại không được để trống !',
            },
            {
              type: "numeber",
              message: "Số điện thoại phải là số!"
            }
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
            placeholder='Số điện thoại'
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
            <Option value="male">GP01</Option>
            <Option value="female">GP02</Option>
            <Option value="other">GP03</Option>
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