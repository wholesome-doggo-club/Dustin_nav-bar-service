import React from 'react';
import style from './login.css';

const Login = (props) => (
  <span className = {style.login}>
    Sign In

    <svg focusable="false" height="7" width="12" transform="translate(5,0)">
      <path class={style.arrowDown} d="M6.002 6L1 1m5.002 5L11 1.002"></path>
    </svg>
  </span>
)

export default Login;