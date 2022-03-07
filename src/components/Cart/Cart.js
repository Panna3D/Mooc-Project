import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
// import {
//   Container, Row, Col, Form, Input, Button, Navbar, Nav,
//   NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
//   DropdownToggle, DropdownMenu, DropdownItem
// } from 'reactstrap';

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
