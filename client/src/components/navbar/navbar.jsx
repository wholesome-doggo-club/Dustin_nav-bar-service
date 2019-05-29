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
      hover: false
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

  handleMouseOver() {
    this.setState({ hover: true }, () => console.log('mouse over', this.state.hover))
  }

  handleMouseOut() {
    this.setState({ hover: false }, () => console.log('moused out', this.state.hover))
  }

  retrieveData() {
    axios
      .get('/api/navbar')
      .then(({ data }) => this.setState({ departments: data }, () => console.log(this.state.departments)))
      .catch(err => console.log(err))
  }

  handleSearchResults(e) {
    if (e.target.value) {
      this.setState({ search: e.target.value }, () => 
        axios
          .get(`/api/search/${this.state.search}`)
          .then(({ data }) => this.setState({ results: data }, () => console.log(this.state.results)))
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
      <div>
        
        <div className={style.navbar}>
          <div className={style.topComp}>
            <div className={style.alignLeft}>
              <Logo />
                <div className={style.alignRight}>
                  <span className={style.rightComp} onMouseOver={() => this.handleMouseOver()}>
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
          {/* conditional render */}
          {
            this.state.hover ? 
            <div className={style.searchBoxDiv}>
              <form className={style.searchBoxForm}>
                <input type="text" placeholder="What can we help you find?" onKeyUp={this.handleSearchResults}/>
                  <svg focusable="false" height="12" width="12" className={style.searchExit} transform="translate(-20,-28)">
                    <path d="M2 2l8 8m0-8l-8 8"></path>
                  </svg>
              </form>
              <ul className={style.searchResults}>
                {this.state.results.map((result, index) => <SearchResults key={index} result={result} />)}
              </ul>
            </div>
            : '' 
          }

          <div>
            <Departments 
              departments={this.state.departments}
              categories={this.state.categories}
              hover={this.state.hover} 
              getCategories={this.getCategories}
              handleMouseOut={this.handleMouseOut} />
          </div>


        </div>
          

      </div>
    )
  }
}

export default Navbar;