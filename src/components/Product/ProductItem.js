import 'bootstrap/dist/css/bootstrap.min.css';
// import { Fragment } from 'react';
// import {Button, Container, Card} from 'react-bootstrap';

import classes from './ProductItem.module.css';
import Card from '../UI/Card';
import Cards from '../Cart/Cart';
// import CardButton from '../Cart/CartButton';
import productImage from '../../Assets/productHeaderImage.jpeg';
import { uiActions } from '../Store/Ui-slide';
import { useDispatch, useSelector  } from 'react-redux';

// import {
//   Container, Row, Col, Form, Input, Button, Navbar, Nav,
//   NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
//   DropdownToggle, DropdownMenu, DropdownItem
// } from 'reactstrap';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { name, price, description } = props;

  const cartButtonHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Card>
        <li>
          <div className={classes.item}>
            <img src = {productImage} />
            <h3>{name}</h3>
            <div>{description}</div>
            <div className={classes.price}>{price}</div>
            <div className={classes.cardButton}>
             < button name="card button" onClick = {cartButtonHandler}>Add to card</button>          
            </div>
          </div>
        </li>
    </Card>
  );
};

export default ProductItem;
