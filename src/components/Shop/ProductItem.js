import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { name, price, description, id } = props;


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
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
        <Link className='btn' to={`/products/${id}`}>
        View Detail
        </Link>
      </Card>
    </li>
  );
};

export default ProductItem;
