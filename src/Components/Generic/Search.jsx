import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function SearchBar() {
  return (
    <Input size="large" placeholder="Search you favorite hotel" prefix={<SearchOutlined />} />
  );
}