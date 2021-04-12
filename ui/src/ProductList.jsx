/* eslint "react/jsx-no-undef": "off" */

import React from 'react';
import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    console.log('Hello');
    this.loadData();
  }

  async loadData() {
    const query = `query {
              productList {
                  id
                  category
                  productName
                  price 
                  image
              }
          }`;

    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const result = await response.json();
    console.log(result);
    this.setState({ products: result.data.productList });
  }

  async createProduct(product) {
    const query = `mutation productAdd($product: ProductInputs!) {
              productAdd(product: $product) {
                  id
              }
          }`;

    await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ query, variables: { product } }),
    });
    this.loadData();
  }

  render() {
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <h2>Showing all available products</h2>
        <hr />
        <br />
        <ProductTable products={this.state.products} />
        <hr />
        <h2>Add a new product to inventory</h2>
        <hr />
        <br />
        <ProductAdd createProduct={this.createProduct} />
      </React.Fragment>

    );
  }
}
