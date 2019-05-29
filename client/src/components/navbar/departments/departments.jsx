import React from 'react';
import DepartmentItem from '../departmentItem/departmentItem';
import Categories from '../categories/categories';
import style from './departments.css';

const Departments = (props) => (
  <div>

    <div className={style.center}>
        {props.departments.map((department, index) => 
          <DepartmentItem 
          key={index}
          index={index} 
            department={department}
            total={props.departments.length}
            getCategories={props.getCategories} />)}

    </div>
    <nav className={style.categoryCenter}>
        {props.categories.map((category, index) => <Categories key={index} category={category} total={props.categories.length} />)}
    </nav>
  </div>
)

export default Departments;