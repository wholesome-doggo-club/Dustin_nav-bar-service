import React from 'react';
import DepartmentItem from '../departmentItem/departmentItem';
import Categories from '../categories/categories';
import style from './departments.css';

const Departments = (props) => (
  <nav>
    <div className={style.center}>
    {props.departments.map((department, index) => 
      <DepartmentItem 
        key={index}
        index={index} 
        department={department}
        total={props.departments.length}
        hover={props.hover}
        handleMouseOver={props.handleMouseOver}
        handleMouseOut={props.handleMouseOut} />)}

    </div>
    <div className={style.categoryCenter}>
      {props.hover ? props.categories.map((category, index) => <Categories key={index} category={category} total={props.categories.length} />) : ''}
    </div>

  </nav>
)

export default Departments;