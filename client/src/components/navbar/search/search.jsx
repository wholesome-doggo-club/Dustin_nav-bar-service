import React from 'react';
import style from './search.css'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false
    }

    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver() {
    this.setState({
      hover: true
    })
  }

  render() {
    return (
      <span className={style.search} onMouseOver={this.handleMouseOver}>
        <svg focusable="false" height="24" width="21" class="nui-icon nui-icon-large-search ">
          <g>
            <g>
              <path transform="rotate(-44.984 16.5 18.5)" className={style.searchIcon} d="M15.288 14.762h2.424v7.475h-2.424z"></path>
              <path className={style.searchIcon} d="M13.5 15.5l-1-1"></path>
              <circle className={style.searchIcon} cx="7.5" cy="9.5" r="7"></circle>
            </g>
          </g>
        </svg>
        <span>
        Search 
        </span>
        {
          this.state.hover ? 
          <div className={style.searchBoxDiv}>
            <form className={style.searchBoxForm}>
              <input type="text" />
            </form> 
          </div>
          : '' 
        }
      </span>
    )
  }
} 

export default Search;