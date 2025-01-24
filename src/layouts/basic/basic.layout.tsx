import React from 'react';
import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BasicLayout;
