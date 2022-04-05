// ----------- Import libraris
import { Fragment, useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// ----------- Import components / methods
// import Home from './components/Pages/Home';
// import ProductDetail from '../src/components/Pages/ProductDetail';

// Layout
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import classes from '../src/components/Shop/ProductItem.module.css';
import AuthContext from '../src/store/auth-context';

// Call API Cart
import { sendCartData, fetchCartData } from './store/cart-actions';

// Component Link
import ProductDetail from './components/Shop/ProductDetail';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import Auth from './components/Pages/Auth';
// import Home from './components/Pages/Home';
// import Pagination from './components/Pagination/index';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // auth state
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  console.log(isLoggedIn);

  // SearchBox
  const [inputText, setInputText] = useState(""); // SearchBox state

  //searching method
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
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
          <input className = {classes.searchBox}
              placeholder="Search bar"
              onChange={inputHandler}
              variant="outlined"
              label="Search"
          />
          {showCart && <Cart />} 

          {/* {!isLoggedIn && ( */}
          <Route path='/auth' >
            <Auth />
          </Route>
          {/* )}   */}

          {isLoggedIn && (
          <Route path='/'>
            <Redirect to='/products' />
          </Route>
          )}

          <Route path='/' >
            <Redirect to='/products' />
          </Route>

          <Route path='/products'>
            <Products input = {inputText}/>
          </Route>

          <Route path='/product/:productId'>
            <ProductDetail />
          </Route>
        
        </Layout>

      </Switch>

    </Fragment>
  );
}

export default App;
