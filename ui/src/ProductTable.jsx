import React from 'react';
import ProductRow from './ProductRow.jsx';

// eslint-disable-next-line react/prefer-stateless-function
export default class ProductTable extends React.Component {
  render() {
    const {deleteProduct} = this.props;
    const productRows = this.props.products.map(
      (product, index) => <ProductRow key={product.id} product={product} deleteProduct={deleteProduct} index={index}/>,
    );
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productRows}
        </tbody>
      </table>
    );
  }
}
