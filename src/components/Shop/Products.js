import { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const { input } = props;

  console.log(input); // testing

  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
    };
      fetchProducts().catch((error) => {
    });
      console.log('Test');
  }, [input]);


 // Filter data function
 useEffect(() => {
  const searchedData = products.filter((el) => {
    if (input === '') {
        return el;
    } else {
        return el.name.toLowerCase().includes(input);
    }
  })
  setFilteredData(searchedData);
},[products, input]);

// Save and store categoried products
let categoriedProducts = [];

/*
  IF dropdownlist was tapped -> Let check selected item whether match API data 
  -> If false, display all
  -> If true, display follow categoried products

  => The same Search box items
*/

return (
  <section className={classes.products}>
    <h2>Buy your favorite products</h2>
    <ul>
     {filteredData.map((product) => (
      <ProductItem
        key={product.id}
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        /> 
        ))}
    </ul>
  </section>
);
};

export default Products;
