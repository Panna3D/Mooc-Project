import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../store/auth-context';

const MainHeader = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <h1>MOOC PROJECT</h1>
      <nav>
        <ul>
          <li>

          {/* </li> */}
          {/* <li>
            <button>Logout</button>
          </li> */}
          {/* <li> */}
            <CartButton />
            {/* <button>
            <Link to='/auth'>Login</Link>
          </button> */}
          {isLoggedIn && (
            <button>
            <Link to='/auth'>Logout</Link>
            </button>
          )}
          {!isLoggedIn && (
            <button>
            <Link to='/auth'>Login</Link>
            </button>
          )}

          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
