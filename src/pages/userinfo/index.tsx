import React from 'react';
import request from '@utils/service';
import { DatePicker } from 'antd';
import './style.less';

export default () => {
  request();
  return (
    <>
      <div className="fontColor">
        this is user info page
        <p>inside</p>
      </div>
      <p>outside</p>
      <DatePicker />
    </>
  );
};
