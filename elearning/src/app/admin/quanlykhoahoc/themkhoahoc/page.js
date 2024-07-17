"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import { Button, Form, Input, Select, Row, Col, DatePicker, InputNumber, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import moment from 'moment';
import { addCourseApi } from '@/app/server/action/course';

const ThemKhoaHoc = () => {
  const [form] = Form.useForm();
  const [numberValue, setNumberValue] = useState(0);

  const handleNumberChange = (value) => {
    setNumberValue(value);
  };

  const validateNumber = (number) => {
    if (number >= 0 && number <= 5) {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    } else {
      return {
        validateStatus: 'error',
        errorMsg: 'Đánh giá từ 0 đến 5',
      };
    }
  };

  const handleUpload = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = async (values) => {
    try {
      const courseData = {
        maKhoaHoc: values.maKhoaHoc,
        biDanh: values.tenKhoaHoc.replace(/\s+/g, '-').toLowerCase(),
        tenKhoaHoc: values.tenKhoaHoc,
        moTa: values.moTa,
        luotXem: values.luotXem,
        danhGia: values.danhGia,
        hinhAnh: values.upload[0]?.name,
        maNhom: 'GP01',
        ngayTao: values.ngayTao ? moment(values.ngayTao).format('DD/MM/YYYY') : '',
        maDanhMucKhoaHoc: values.danhMucKhoaHoc,
        taiKhoanNguoiTao: values.nguoiTao,
      };

      // await addCourseApi(courseData);
      console.log(courseData);
      message.success('Thêm khóa học thành công!');
      form.resetFields();
    } catch (error) {
      console.error('Failed to add course:', error);
      message.error('Thêm khóa học thất bại.');
    }
  };

  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ marginBottom: '40px' }}>Thêm khoá học</h1>
      <Form
        form={form}
        onFinish={onFinish}
        scrollToFirstError
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="maKhoaHoc"
              label="Mã khoá học"
              rules={[{ required: true, message: 'Vui lòng nhập mã khoá học!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="tenKhoaHoc"
              label="Tên khoá học"
              rules={[{ required: true, message: 'Vui lòng nhập tên khoá học!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="danhMucKhoaHoc"
              label="Danh mục khoá học"
              rules={[{ required: true, message: 'Hãy chọn danh mục khoá học!' }]}
            >
              <Select
                options={[
                  { label: 'Designer', value: 'designer' },
                  { label: 'Developer', value: 'developer' },
                  { label: 'Product Manager', value: 'product-manager' },
                ]}
              />
            </Form.Item>
            <Form.Item name="ngayTao" label="Ngày tạo">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="danhGia"
              label="Đánh giá"
              validateStatus={validateNumber(numberValue).validateStatus}
              help={validateNumber(numberValue).errorMsg}
            >
              <InputNumber
                type='number'
                min={0}
                max={5}
                value={numberValue}
                onChange={handleNumberChange}
                style={{ width: '100%' }}
              />
            </Form.Item>
            <Form.Item
              name="luotXem"
              label="Lượt xem"
              rules={[{ required: true, message: 'Vui lòng nhập lượt xem!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="nguoiTao"
              label="Người tạo"
              rules={[{ required: true, message: 'Hãy chọn người tạo!' }]}
            >
              <Select
                options={[
                  { label: 'Designer', value: 'designer' },
                  { label: 'Developer', value: 'developer' },
                  { label: 'Product Manager', value: 'product-manager' },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={handleUpload}
            >
              <Upload name="logo" action="http://localhost:3000" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="moTa"
          label="Mô tả"
          rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 18 }}
        >
          <Input.TextArea rows={6} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3, span: 14 }}>
          <Button className='me-2' type="primary" htmlType="submit">
            Submit
          </Button>
          <Button danger onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Form.Item>
      </Form>
      <Link href="/admin/quanlykhoahoc" className='text-decoration-none'>
        <i className="fa fa-arrow-left"></i> Quay lại trang trước
      </Link>
    </div>
  );
};

export default ThemKhoaHoc;