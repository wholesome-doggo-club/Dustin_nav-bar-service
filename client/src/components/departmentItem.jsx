import React from 'react';
import style from './departmentItem.css'

const DepartmentItem = (props) => (
  <span className={style.departments} onMouseOver={() => props.handleMouseOver(props.index)}>
    {props.department.name}
    
  </span>
)

export default DepartmentItem;