import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "react-bootstrap";
import * as alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import BasketList from "./BasketList";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    basket: [],
  };
  componentDidMount() {
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToBasket = (product) => {
    let newBasket = this.state.basket;
    let addedItem = newBasket.find((c) => c.product.id === product.id);
     if (addedItem) {
    } else {
      newBasket.push({ product: product, quantity: 1 });
    }
    this.setState({ basket: newBasket });
    alertify.success(`${product.productName} added to basket`, 1.5);
  };

  removeFromBasket = (product) => {
    let newBasket = this.state.basket.filter((b) => b.product.id != product.id);
    this.setState({ basket: newBasket });
    alertify.error(`${product.productName} removed from basket`, 1.5);

  };

  render() {
    let productInfo = {
      title: "Product List",
    };
    let categoryInfo = {
      title: "Category List",
    };
    return (
      <div>
        <Container>
          <Navi
            basket={this.state.basket}
            removeFromBasket={this.removeFromBasket}
          />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      info={productInfo}
                      currentCategory={this.state.currentCategory}
                      addToBasket={this.addToBasket}
                    />
                  )}
                />
                <Route exact path="/basket" render={(props) => (
                    <BasketList
                      {...props}
                      basket={this.state.basket}
                      removeFromBasket={this.removeFromBasket}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
