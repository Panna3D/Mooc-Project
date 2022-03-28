// ----------- Import libraris
import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// ----------- Import components / methods
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import classes from '../src/components/Shop/ProductItem.module.css';

// import FilterCategory from './components/Shop/FilterCategory';
import ProductDetail from './components/Shop/ProductDetail';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // SearchBox
  const [inputText, setInputText] = useState(""); // SearchBox state

  //searching method
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(lowerCase);
  };

  // --------- API
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
      dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  // --------- Render
  return (
    <Fragment>
      < Switch>
        <Layout>
          {notification && ( //Show notify Fetch/Put/Push API success / error
            <Notification 
              status={notification.status}
              title={notification.title}
              message={notification.message}
            />
          )}
          <Route path='/' exact>
            <Redirect to='/products' />
          </Route>            

          <Route path='/products' exact>
            <input className = {classes.searchBox}
              placeholder="Search bar"
              onChange={inputHandler}
              variant="outlined"
              label="Search"
            />
            {showCart && <Cart />} 
            <Products input = {inputText}/>
          </Route>

          <Route path='/products/:productId'>
            {showCart && <Cart />} 
            <ProductDetail />
          </Route>  
        </Layout>

      </Switch>

    </Fragment>
  );
}

export default App;
