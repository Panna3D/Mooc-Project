import { Fragment } from "react";
import classes from './Header.module.css';
import productHeaderImage from '../../Assets/productHeaderImage.jpeg';

const Header = props => {
    return (
        <Fragment>
        <header className={classes.header}>
          <h1>Products</h1>
        </header>
        <div className={classes['main-image']}>
          <img src={productHeaderImage} alt='A table full of delicious food!' />
        </div>
      </Fragment>    
    );
}

export default Header;