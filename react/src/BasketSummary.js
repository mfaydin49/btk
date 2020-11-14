import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class BasketSummary extends Component {
  renderSummry() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Basket - {this.props.basket.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.basket.map((item) => (
            <DropdownItem key={item.product.id}>
              <Badge
                color="danger"
                onClick={() => this.props.removeFromBasket(item.product)}
              >X</Badge>
              {item.product.productName}
              <Badge color="success">{item.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to="basket">Go to Basket</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyBasket() {
    return (
      <NavItem>
        <NavLink>Emty Basket</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.basket.length > 0
          ? this.renderSummry()
          : this.renderEmptyBasket()}
      </div>
    );
  }
}
