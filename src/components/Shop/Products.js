import { useEffect, useState } from 'react';

// Pagination: react-pagination
import 'react-pagination-bar/dist/index.css'
// import { Pagination } from "react-pagination-bar"

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const { input } = props;

  console.log(input); // testing

  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageProductLimit = 10;


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
  }, [input, currentPage]);

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
  },[products, input, currentPage]);

  const totalPages = Math.ceil(products.length / pageProductLimit); 

  const handlePageChange = (newPage) => {
    console.log(newPage);
    setCurrentPage(newPage);
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {console.log(currentPage)}
      {filteredData.slice(
          (currentPage - 1) * pageProductLimit,
          (currentPage - 1) * pageProductLimit + pageProductLimit
        ).map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          /> 
          ))}
      </ul>

      <div className={classes.paginationBtn}>
          <button
              // Disable button prev khi là trang số 1 (đầu tiên)
              disabled = {currentPage <= 1}
              onClick = {() => handlePageChange(currentPage - 1)}
          >
          Prev
          </button>
          <button
              // Disable button next khi là trang số 1 (đầu tiên)
              disabled = {currentPage === totalPages}
              onClick = {() => handlePageChange(currentPage + 1)}
          >
          Next
          </button>
      </div>
      <br/>
        
    </section>
  );
};

export default Products;
