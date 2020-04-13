import React, { useState, useEffect } from 'react';

const Welcome = (props) => {
  const { name } = props;
  return (
    <div>
      {`Hello ${name}`}
    </div>
  );
};

const componentPropsTest = () => {
  const [state, setState] = useState(undefined);

  const tick = () => {
    setState(new Date());
  };

  useEffect(() => {
    const timeSetInterval = setInterval(
      () => tick(),
      1000,
    );
    return () => {
      clearInterval(timeSetInterval);
    };
  }, [state]);

  return (
    <div>
      <p>Component and Props</p>
      <Welcome name="Park Hansol" />
      <div>
        {
          state === undefined
            ? <div>loading</div>
            : <h2>{state.toLocaleTimeString()}</h2>
        }
      </div>
    </div>
  );
};

export default componentPropsTest;
