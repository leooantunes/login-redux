import React, { useState, useEffect } from "react";
import {useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../redux/Actions/loginAction";
import { ContainerLogin } from "./style";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loggingIn = useSelector((state) => state.authentication.loggingIn); 
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if(email && password){
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userActions.login(email, password, from));
    }
  }

  return (
    <ContainerLogin>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={(e) => handleLogin(e)}>
        {loggingIn && <span>carregando...</span>}
        logar
      </button>
    </ContainerLogin>
  );
}

export default Login;
