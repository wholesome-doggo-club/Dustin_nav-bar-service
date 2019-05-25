import React from 'react';
import Subcategories from '../subcategories/subcategories'
import style from './categories.css'

const Categories = (props) => {

  const inlineCat = {
    float: 'left',
    width: (100 / props.total) + '%',
  };

  return (
    <div style={inlineCat}>
      <span className={style.categories}>
        {props.category.name}
        <ul className={style.subcategories}>
          {props.category.subcategories.map((subcategory, index) => <Subcategories key={index} subcategory={subcategory} />)}
        </ul>  
      </span>
    </div>
  )
}

export default Categories;