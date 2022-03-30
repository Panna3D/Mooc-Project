import { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import classes from './Products.module.css';
// import Pagination from '../Pagination/index';
import queryString from 'query-string';

const Products = (props) => {
  const { input } = props;

  console.log(input); // testing

  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  

  let {
    _page = 1, 
    _limit = 10, 
    _totalProduct = 1
 } = pagination;

  // Pagination
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalProduct: products,
  });

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
  })

  useEffect(() => {
    const fetchProducts = async () => {
      const paramString = queryString.stringify(filter);
      const response = await fetch(
        // 'https://react-http-838c9-default-rtdb.firebaseio.com/products.json'
        `https://react-http-838c9-default-rtdb.firebaseio.com/products.json?${paramString}`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      // const {filter} = responseData;

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
  }, [input, filter]);

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

// handle paginate
  const handlePageChange = (newPage) => {
    console.log('New page', newPage);
  };

  const totalPages = Math.ceil(_totalProduct / _limit);

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

      <div>
          <button
              // Disable button prev khi là trang số 1 (đầu tiên)
              disabled = {_page = 1}
              onClick = {handlePageChange(_page - 1)}
          >
          Prev
          </button>
          <button
              // Disable button next khi là trang số 1 (đầu tiên)
              disabled = {_page >= totalPages}
              onClick = {handlePageChange(_page + 1)}
          >
          Next
          </button>
      </div>
        
    </section>
  );
};

export default Products;
