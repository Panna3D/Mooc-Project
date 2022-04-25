// import Rating from 'react-rating';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import Rating from '../Rating/index';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { name, price, description, id, category } = props;

  const addToCartHandler = () => {

    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          {/* <p>{category}</p> */}
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
        <div>
          <Rating />  
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
