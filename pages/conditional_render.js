import React, { Fragment, useState } from 'react';

const ConditionalRender = () => {
  console.log('Conditional Rendering Test');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Fragment>
      <div>조건부 렌더링</div>
      {
        isLoggedIn === false
          ? <button type="button" onClick={() => setIsLoggedIn(true)}>로그인</button>
          : <button type="button" onClick={() => setIsLoggedIn(false)}>로그아웃</button>
      }
    </Fragment>
  );
};

export default ConditionalRender;
