import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import FilterCategory from './components/Shop/FilterCategory';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

// let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // SearchBox
  const [inputText, setInputText] = useState(""); // SearchBox state
  // DropdownList
  const [filterCategory, setFilterCategory] = useState(false); // SearchBox state

  let isSearchBox = false;

  let inputHandler = (e) => {
    isSearchBox = true; // check is search?
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(lowerCase);
  };

  // --------- API
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }

    // if (cart.changed) {
      dispatch(sendCartData(cart));
    // }
  }, [cart, dispatch]);

  // --------- Render
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
        <input
          placeholder="Search bar"
          onChange={inputHandler}
          variant="outlined"
          label="Search"
        />

      <div>
        <FilterCategory />
      </div>          

      <Layout>
        {showCart && <Cart />}
          {/* {filterCategory && <Products 
            input = {inputText}
          />
          } */}
          <Products 
            input = {inputText}
          />
      </Layout>
    </Fragment>
  );
}

export default App;
