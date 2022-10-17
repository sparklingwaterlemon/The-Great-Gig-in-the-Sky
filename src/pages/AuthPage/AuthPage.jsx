import { useState } from 'react';
import './AuthPage.css';
import LoginForm from "../../components/UserForms/LoginForm/LoginForm";
import SignUpForm from "../../components/UserForms/SignUpForm/SignUpForm";
import NavBar from '../../components/NavBar/NavBar';



export default function AuthPage({ setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <NavBar />
    <div className="auth-page-container">
    <span className="title">Click Here To </span>
      <button className="big-button" onClick={() => setShowLogin(!showLogin)}>
         {showLogin ? 'SIGN UP' : 'LOGIN'}
      </button>


      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser}/>}
    </div>
    </>
  );
}


