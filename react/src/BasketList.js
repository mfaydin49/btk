import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class BasketList extends Component {
  renderBasket() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units in Srock</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.basket.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.id}</td>
              <td>{item.product.cayegoryId}</td>
              <td>{item.product.categoryName}</td>
              <td>{item.product.unitsPrice}</td>
              <td>{item.product.unitsInStock}</td>
              <td>{item.product.quantity}</td>
              <Button color="danger" onClick={()=>this.props.removeFromBasket(item.product)}>
Remove
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
  return <div>{this.renderBasket()}</div>;
  }
}
