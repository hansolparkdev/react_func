import React from 'react';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <div>레이아웃</div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
