import React from 'react';
import axios from 'axios';
import Logo from './logo/logo';
import Search from './search/search';
import Login from './login/login';
import Cart from './cart/cart';
import Departments from './departments/departments';
import SearchResults from './searchResults/searchResults';
import style from './navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      results: [],
      departments: [],
      categories: [],
      subcategories: [],
      searchHover: false,
      accountHover: false,
      cartHover: false
    }

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
    this.handleSearchResults = this.handleSearchResults.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.retrieveData();
  }

  handleMouseOver(stateName) {
    this.setState({ [stateName]: true })
  }

  handleMouseOut(stateName) {
    if (stateName === 'nav') {
      this.setState({
        categories: [],
        subcategories: []
      })
    } else {
      this.setState({ [stateName]: false }, () => console.log('moused out', this.state.stateName))
    }

  }

  retrieveData() {
    axios
      .get('/navbar/navbar')
      .then(({ data }) => this.setState({ departments: data }, () => console.log(this.state.departments)))
      .catch(err => console.log(err))
  }

  handleSearchResults(e) {
    if (e.target.value) {
      this.setState({ search: e.target.value }, () => 
        axios
          .get(`/navbar/search/${this.state.search}`)
          .then(({ data }) => this.setState({ results: data }))
          .catch(err => console.log(err)))
    } else {
      this.setState({
        search: '',
        results: []
      })
    }
  }

  getCategories(idx) {
    this.setState({ categories: this.state.departments[idx].categories }, () => console.log('categories get', this.state.categories))
  }

  render() {
    return (
      <div className={style.navbar}>
        <div className={style.topComp}>
          <div className={style.alignLeft}>
            <Logo />
              <div className={style.alignRight}>
                <span className={style.rightComp}>
                  <Search handleMouseOver={this.handleMouseOver} /> 
                </span>
                <span className={style.rightComp}>
                  <Login /> 
                </span>
                <span className={style.rightComp}>
                  <Cart />
                </span>
              </div>
          </div>
        </div>
        {/* search conditional render */}
        {
          this.state.searchHover ? 
          <div id="searchResults" className={style.searchBoxDiv}>
            <form className={style.searchBoxForm}>
              <input type="text" placeholder="What can we help you find?" onKeyUp={this.handleSearchResults}/>
              <a href="#" onClick={() => this.handleMouseOut('searchHover')}>
                <svg focusable="false" height="12" width="12" className={style.searchExit} transform="translate(-20,-28)">
                  <path d="M2 2l8 8m0-8l-8 8"></path>
                </svg> 
              </a>
            </form>
            <ul className={style.searchResults}>
              {this.state.results.map((result, index) => <SearchResults key={index} result={result} />)}
            </ul>
          </div>
          : '' 
        }

        {/* account conditional render */}
        {
          this.state.accountHover ? 
          <div className={style.searchBoxDiv}>
            <form className={style.searchBoxForm}>
              <input type="text" placeholder="What can we help you find?" onKeyUp={this.handleSearchResults}/>
              <a href="#" onClick={() => this.handleMouseOut('searchHover')}>
                <svg focusable="false" height="12" width="12" className={style.searchExit} transform="translate(-20,-28)">
                  <path d="M2 2l8 8m0-8l-8 8"></path>
                </svg> 
              </a>
            </form>
            <ul className={style.searchResults}>
              {this.state.results.map((result, index) => <SearchResults key={index} result={result} />)}
            </ul>
          </div>
          : '' 
        }
        <Departments 
          departments={this.state.departments}
          categories={this.state.categories}
          hover={this.state.hover} 
          getCategories={this.getCategories}
          handleMouseOut={this.handleMouseOut} />
        {/* <div>
          <img src="http://static1.squarespace.com/static/52512705e4b062435b66fb1f/t/56caded2859fd07d71c0bb68/1554376892380/"></img>
        </div> */}
      </div>
    )
  }
}

export default Navbar;