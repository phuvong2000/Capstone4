"use client"
import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 22,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} không được để trống!',
    types: {
        email: '${label} không hợp lệ!',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};
const ThemNguoiDung = () => {
    return (
        <div>
            <h1 style={{ marginBottom: '40px' }}>Thêm người dùng</h1>
            {/* Form thêm người dùng */}
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                    maxWidth: 1000,
                }}
                validateMessages={validateMessages}
            >
                {/* Tài khoản */}
                <Form.Item
                    name="taiKhoan"
                    label="Tài khoản"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* Mật khẩu */}
                <Form.Item
                    name="matKhau"
                    label="Mật khẩu"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                {/* Họ tên */}
                <Form.Item
                    name="hoTen"
                    label="Họ tên"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* Email */}
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: "email",
                            required: true,
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* Số điện thoại */}
                <Form.Item
                    name="soDT"
                    label="Số điện thoại"
                    rules={[
                        {
                            required: true,
                        },
                        {
                            pattern: new RegExp(/^[0-9]+$/),
                            message: 'Số điện thoại không hợp lệ!',
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 4,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ThemNguoiDung