import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { getDataJsonStorage } from '@/app/util/function';
const userLogin = getDataJsonStorage('userLogin');

const UserDropdown = () => {
  const userLogin = getDataJsonStorage('userLogin');

  // Khai báo items dựa vào maLoaiNguoiDung của userLogin
  let items = [
    {
      label: <a href="#">Thông tin</a>,
      key: '0',
    },
    {
      label: <a href="#">Đăng xuất</a>,
      key: '1',
    }
  ];

  if (userLogin && userLogin.maLoaiNguoiDung === 'GV') {
    items.push({
      type: 'divider'
    }, {
      label: <a href="#">Trang quản trị</a>,
      key: '3'
    });
  }

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()} className='text-dark text-decoration-none'>
        <Space>
          {userLogin.hoTen}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default UserDropdown;
