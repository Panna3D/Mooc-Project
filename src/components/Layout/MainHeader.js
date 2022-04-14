import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../store/auth-context';

const MainHeader = (props) => {
  const authCtx = useContext(AuthContext);
  const location = useLocation();
  // auth state context
  const isLoggedIn = authCtx.isLoggedIn;

  const loginHandler = () => {

  }

  const logoutHandler = () => {
    authCtx.logout();
  }

  return (
    <header className={classes.header}>
      <h1>MOOC PROJECT</h1>
      {/* <p>{location.pathname}</p> */}
      <nav>
        <ul>
          <li>
            <CartButton />
            {!isLoggedIn &&(
              <button onClick={loginHandler}>
                <Link to='/auth'>Login</Link>
              </button>
            )}

            {isLoggedIn &&(
              <button onClick={logoutHandler}>
                <Link to='/products'>Logout</Link>
              </button>
            )}      
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
