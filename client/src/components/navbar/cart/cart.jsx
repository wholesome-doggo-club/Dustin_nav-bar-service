import React from 'react';
import style from './cart.css';

const Cart = (props) => (
  <span className={style.cart}>
    <svg focusable="false" height="24" width="24" class="nui-icon nui-icon-large-bag-empty LlfoF">
      <path className={style.emptyBag} d="M23.5 9.5a1 1 0 0 0-1-1h-21a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h21a1 1 0 0 0 1-1v-13z"></path>
      <path className={style.emptyBag1} d="M6 8a6 6 0 1 1 12 0"></path>
    </svg>
    <span className={style.bagNumber}>
      0
    </span>
    
  </span>
)

export default Cart;