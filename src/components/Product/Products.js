import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';

import classes from './Products.module.css';
// import SearchBox from './SearchBox';

const Products = (props) => {
  const { input } = props;

  console.log(input);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://react-http-838c9-default-rtdb.firebaseio.com/products.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setProducts(loadedProducts);
      setIsLoading(false);
    };

      fetchProducts().catch((error) => {
      setIsLoading(false);
    });
      console.log('Test');
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }
//-------------- Down ------------------------------------

  // Filter data function
  const filteredData = products.name.filter((el) => {
    if (input === '') {
        return el;
    } else {
        return el.name.toLowerCase().includes(input);
    }
  });

    // Get products after filtered
    const productsList = filteredData.map((product) => (
      <ProductItem
        key={product.id}
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
      />
    ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsList}
        {/* {filteredData.map(product => (
          <li key={product.id}>
            {product.name}
          </li>
        ))} */}
      </ul>
    </section>
  );
};

export default Products;
