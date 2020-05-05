import React from 'react';
import Products from '../products/products';
import Header from '../header/header';
import './mainlayout.css';

class Mainlayout extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      filterData: [],
      selectedValue: ''
    }
  }
  componentDidMount() {
    fetch('http://demo4603548.mockable.io/products')
    .then(res => res.json())
    .then(res => {
      const categories = [];
      res.products.forEach(element => {
        if (categories.indexOf(element.category) < 0) {
          categories.push(element.category);
        }
      });
      this.setState({ 
        products: res.products,
        categories: categories,
        filterData: res.products
      })
    })
  }
  getCategories = (e, value) => {
    e.stopPropagation();
    const filteredValue = this.state.products.filter(elem => elem.category === value);
    this.setState({
      filterData: filteredValue,
      selectedValue: value
    });
  }
  render() {
    let { filterData, categories, selectedValue } = this.state; 
    return (
      <div>
        <Header/>
        <div className="filterValue">
          {
            categories.map((elem, i) => {
              return <div onClick={(event => this.getCategories(event, elem))} key={i} style={{ backgroundColor: selectedValue === elem ? '#847aff': '#afafaf'}}>{elem}</div>
            })
          }
        </div>
        <div className="content">
              <div className="container">
              {
                filterData.map((product, idx) => {
                  return <Products data={product} key={idx}/>
                })
              }
              </div>
        </div>
      </div>
      );
  }
}

export default Mainlayout;
