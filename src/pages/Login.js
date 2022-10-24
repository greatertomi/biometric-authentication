import React from 'react';
import '@passageidentity/passage-elements/passage-login';

const Login = () => {
  return (
    <div>
      This is the Login Page
      <passage-login app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-login>
    </div>
  );
};

export default Login;
