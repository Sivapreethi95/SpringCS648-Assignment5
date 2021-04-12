/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {Link} from 'react-router-dom';

export default class ProductRow extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <tr>
        <td>{product.productName}</td>
        <td>
          $
          {product.price}
        </td>
        <td>{product.category}</td>
        <td><a href={product.image}>View</a></td>
        <td><Link to={`/edit/${product.id}`}>Edit</Link></td>
      </tr>
    );
  }
}
