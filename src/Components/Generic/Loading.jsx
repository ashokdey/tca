import React from 'react';
import { Space, Spin } from 'antd';

export default function Loading() {
  return (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  );
}