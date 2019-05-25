import React from 'react';
import style from './departmentItem.css'

const DepartmentItem = (props) => {

  const inlineDep = {
    float: 'left',
    width: (100 / props.total) + '%',
  }

  return (
    <div style={inlineDep}>
      <span className={style.departments} onMouseOver={() => props.handleMouseOver(props.index)}>
        {props.department.name}
      </span>
    </div>
  )
}

export default DepartmentItem;