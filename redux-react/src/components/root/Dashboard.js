import React from "react";
import { Row, Col } from "reactstrap";
import CategoryList from "../categories/CategoryList"
import ProductList from "../products/ProductList"

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col xs="3">
            <CategoryList/>
        </Col>
        <Col xs="3">
            <ProductList/>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;