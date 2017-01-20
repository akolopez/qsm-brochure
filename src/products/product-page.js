import React, { Component } from 'react'
import Select from 'react-select'
import Product from './product'

import 'react-select/dist/react-select.css';

import 'whatwg-fetch'

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filterByType: null,
      filterByBrand: null,
      filterBySpecies: null,
      filterByAny: []
    }

    this.changeFilterByType = this.changeFilterByType.bind(this)
    this.changeFilterByBrand = this.changeFilterByBrand.bind(this)
    this.changeFilterBySpecies = this.changeFilterBySpecies.bind(this)
    this.changeFilterByAny = this.changeFilterByAny.bind(this)
  }

  changeFilterByType(filterByType) {
    this.setState({ filterByType })
  }

  changeFilterByBrand(filterByBrand) {
    this.setState({ filterByBrand })
  }

  changeFilterBySpecies(filterBySpecies) {
    this.setState({ filterBySpecies })
  }

  changeFilterByAny(filterByAny) {
    this.setState({ filterByAny })
  }

  componentDidMount() {
      this.loadProducts();
  }

  loadProducts() {
    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }

    fetch('/api/product/', {
      method: 'GET'
    }).then(checkStatus)
      .then(response => {
      return response.json();
    }).then(json => {
      this.setState({'products': json});
    }).catch(function(error) {
      console.log('request failed', error)
    });
  }



  render() {
    //TODO(miggy): clean up this shit.
    var types = [
      {
        value: null, label: 'Any'
      },
      {
        value: 'vitamins', label: 'Vitamins'
      },
      {
        value: 'antibiotics', label: 'Antibiotics'
      },
      {
        value: 'basemix', label: 'Base Mixes'
      }
    ]

    var brands = [
      {
        value: null, label: 'Any'
      },
      {
        value: 'msd', label: 'MSD'
      },
      {
        value: 'zagro', label: 'Zagro'
      }
    ]

    var species = [
      {
        value: null, label: 'Any'
      },
      {
        value: 'swine', label: 'Swine'
      },
      {
        value: 'poultry', label: 'Poultry'
      }
    ]

    return (
      <div>
        <h2>Our Products</h2>
        <div>
          <div>
            <Select.Creatable
                name="search-all"
                multi
                value={ this.state.filterByAny }
                placeholder="Begin Searching..."
                onChange={ this.changeFilterByAny }
                addLabelText="{label}"
                noResultsText={ false }
            />
          </div>
          <div>
            <Select
                name="filter-type"
                simpleValue
                value={ this.state.filterByType }
                placeholder="Any Type"
                options={ types }
                onChange={ this.changeFilterByType }
            />
            <Select
                name="filter-brand"
                simpleValue
                value={ this.state.filterByBrand }
                placeholder="Any Brand"
                options={ brands }
                onChange={ this.changeFilterByBrand }
            />
            <Select
                name="filter-species"
                simpleValue
                value={ this.state.filterBySpecies }
                placeholder="Any Species"
                options={ species }
                onChange={ this.changeFilterBySpecies }
            />
          </div>
          <ul>
            {
              this.state.products.filter(product => {
                return this.state.filterByType ? this.state.filterByType.toLowerCase() === product.type.toLowerCase() : true &&
                        this.state.filterByBrand ? this.state.filterByBrand.toLowerCase() === product.brand.toLowerCase() : true &&
                        this.state.filterBySpecies ? this.state.filterBySpecies.toLowerCase() === product.species.toLowerCase() : true
              }).filter(product => {
                return this.state.filterByAny.every(filterObject => {
                  var filterString = filterObject.value
                  return product.name.toLowerCase().includes(filterString.toLowerCase()) ||
                  product.description.toLowerCase().includes(filterString.toLowerCase()) ||
                  product.brand.toLowerCase().includes(filterString.toLowerCase())
                })
              }).map(filteredProduct => {
                console.log(filteredProduct.name)
                console.log(filteredProduct)
                return (
                  <li key={ filteredProduct.id.toString() } >
                    <Product product={ filteredProduct } />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default ProductPage;
