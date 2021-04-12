/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {Link} from 'react-router-dom';

export default class ProductRow extends React.Component {
  render() {
    const { product, deleteProduct, index } = this.props;
    return (
      <tr>
        <td>{product.productName}</td>
        <td>
          $
          {product.price}
        </td>
        <td>{product.category}</td>
        <td><Link to={`/image/${product.id}`}>View</Link></td>
        <td><Link to={`/edit/${product.id}`}>Edit</Link></td>
        <td><button type="button" onClick={()=> {deleteProduct(index);}}>Delete</button></td>
      </tr>
    );
  }
}
