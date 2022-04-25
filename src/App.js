// ----------- Import libraris
import { Fragment, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// ----------- Import components / methods
// import Home from './components/Pages/Home';
// import ProductDetail from '../src/components/Pages/ProductDetail';

// Layout
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
// import classes from '../src/components/Shop/ProductItem.module.css';
import AuthContext from '../src/store/auth-context';
// import Rating from 'react-rating';

// Call API Cart
import { sendCartData, fetchCartData } from './store/cart-actions';

// Component Link
import ProductDetail from './components/Shop/ProductDetail';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import Auth from './components/Pages/Auth';
// import Home from './components/Pages/Home';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // auth state
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  console.log(isLoggedIn);

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

          {showCart && <Cart />} 

          <Route path='/auth' >
            <Auth />
          </Route>

          {isLoggedIn && (
          <Route path='/'>
            <Redirect to='/products' />
          </Route>
          )}

          <Route path='/' >
            <Redirect to='/products' />
          </Route>

          <Route path='/products'>
            <Products/>
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
