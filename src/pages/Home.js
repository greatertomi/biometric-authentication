import React from 'react';
import "@passageidentity/passage-auth";

const Auth = () => {
  return (
    <div>
      <passage-auth app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-auth>
    </div>
  );
};

export default Auth;
