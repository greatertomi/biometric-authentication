import React from 'react';
import {useCurrentUser} from "../hooks/useCurrentUser";
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import {useNavigate} from "react-router-dom";
import { Passage } from '@passageidentity/passage-js';


const Dashboard = () => {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  const handleAuth = async () => {
    const passage = new Passage(process.env.REACT_APP_PASSAGE_APP_ID);
    try {
      const data = await passage.login(process.env.REACT_APP_PASSAGE_EMAIL);
      console.log('Auth data', {data});
    } catch (err) {
      console.error('Auth error', {err});
    }
  }

  const handleLogout = async () => {
    const user = new PassageUser();
    await user.signOut();
    navigate('/');
  }

  return (
    <div>
      <h3>Welcome {currentUser.username}</h3>
      This is the Dashboard Page
      <div>
        <button onClick={handleAuth}>Authenticate</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
