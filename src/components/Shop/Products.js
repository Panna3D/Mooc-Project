import { useEffect, useState, useRef } from 'react';

// Pagination: react-pagination
import 'react-pagination-bar/dist/index.css'
import Rating from 'react-rating';
// import { Pagination } from "react-pagination-bar"

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  // const { input } = props;
  let inputRef = useRef();

  // SearchBox (main logic to default display page)
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputText, setInputText] = useState(""); // SearchBox state

  // State của Dropdownlist
  const [selected, setSelected] = useState('');
  const [isSelect, setIsSelect] = useState(false);
  const [categoriedData, setCategoriedData] = useState([]);
  
  // Filter category
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
          category: responseData[key].category,
        });
      }

      setProducts(loadedProducts);
    };
      fetchProducts().catch((error) => {
    });
  }, [currentPage]);

  // Pagnination
  const totalPages = Math.ceil(products.length / pageProductLimit); 
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Category products after select item on Dropdownlist
  useEffect(() => {
    const categories = products.filter((item) => {
      return item.category === selected
    })
    setCategoriedData(categories);
  }, [selected]);

  // Handler event from Dropdownlist
  const handlerSelect = (e) => {
    let itemValue = e.target.value; 
    setSelected(itemValue);
    setIsSelect(true);
    console.log(isSelect);
  };

  // Handler searching
  const inputHandler = () => {
    let result = inputRef.current.value;
    console.log(result);
    setInputText(result);
    setIsSelect(false);
  };

   // Filter data function
   useEffect(() => {
    const searchedData = products.filter((el) => {
      if (inputText.trim() === '') {
          return el;
      } else {
          return el.name.toLowerCase().includes(inputText);
      }
  })
    setFilteredData(searchedData);
  },[products, inputText, currentPage]);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <div className = {classes.searchBox}s>
        <input 
                placeholder="Search bar"
                ref={inputRef}
                variant="outlined"
                label="Search"
        />
        <button onClick={inputHandler}>Search</button>
      </div>
      <br/>

      <select onChange={handlerSelect}>
        {products.map((prd) => (
            <option value={prd.category}>{prd.category}</option>
        ))}
      </select>

      <ul>
        {!isSelect && filteredData.slice(
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

        {isSelect && categoriedData.slice(
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
              disabled = {currentPage <= 1}
              onClick = {() => handlePageChange(currentPage - 1)}
          >
          Prev
          </button>
          <button
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
