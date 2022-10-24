import React from 'react';
import '@passageidentity/passage-elements/passage-register';

const Register = () => {
  return (
    <div>
      This is the Register Page
      <passage-register app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-register>
    </div>
  );
};

export default Register;
