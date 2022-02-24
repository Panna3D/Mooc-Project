import 'bootstrap/dist/css/bootstrap.min.css';
// import { Fragment } from 'react';
// import {Button, Container, Card} from 'react-bootstrap';

import classes from './ProductItem.module.css';
import Card from '../UI/Card';
import productImage from '../../Assets/productHeaderImage.jpeg';

// import {
//   Container, Row, Col, Form, Input, Button, Navbar, Nav,
//   NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
//   DropdownToggle, DropdownMenu, DropdownItem
// } from 'reactstrap';

const ProductItem = (props) => {
  const { name, price, description } = props;

  return (
    <Card>
        <li>
          <div className={classes.item}>
            <img src = {productImage} />
            <h3>{name}</h3>
            <div>{description}</div>
            <div className={classes.price}>{price}</div>
          </div>
        </li>
    </Card>
  );
};

export default ProductItem;
