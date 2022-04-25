import { useEffect, useState, useRef } from 'react';
import { uiActions } from '../../store/ui-slice';

// Pagination: react-pagination
import 'react-pagination-bar/dist/index.css'

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
  const [isNoProduct, setIsNoProduct] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [categoriedData, setCategoriedData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  // Pagination
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
      const loadedProductCategory = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          category: responseData[key].category,
        });
      }

      for (const key in responseData){
        loadedProductCategory.push({
          category: responseData[key].category
        })
      }

      setCategoryList(loadedProductCategory);
      setProducts(loadedProducts);
    };
      fetchProducts().catch((error) => {
    });
  }, [currentPage, products, inputText]);

  // Pagnination
  const totalPages = Math.ceil(products.length / pageProductLimit); 

  const handlePageChange = (newPage) => {

    if(filteredData.length <= 10) {
      // setIsSearch(false);
      return;
    }
    setCurrentPage(newPage);
  };

  // Category products after select item on Dropdownlist
  useEffect(() => {
    // setIsSearch(false);
    const categories = products.filter((item) => {
      return item.category === selected
    })
    setCategoriedData(categories);
  }, [selected, products]);

  // Handler select of Dropdownlist
  const handlerSelect = (e) => {
    let itemValue = e.target.value; 
    setSelected(itemValue);
    setIsSelect(true);
    console.log(isSelect);
  };

  // Handler searching from search box
  // useEffect(() => {
    const inputHandler = () => {
      let result = inputRef.current.value;
      setInputText(result);
      setIsSelect(false);
    };
  // }},[products, inputText]);

   // Searching data
   useEffect(() => {
    const searchedData = products.filter((el) => {
      if (inputText.trim() === '') {
          // setIsSearch(false);
          return el;
      } else {
          // setIsSearch(true);
          return el.name.toLowerCase().includes(inputText);
      }
  })
    setFilteredData(searchedData);
  },[products, inputText, currentPage]);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <div className = {classes.searchBox}>
        <input 
          placeholder="Search Product Name"
          ref={inputRef}
          variant="outlined"
          label="Search"
        /> 
        <span style={{marginLeft: 20}}>  
          <button style={{lineHeight: 0.5}} onClick={inputHandler}>Search</button>
        </span>
        <br/>

        <select onChange={handlerSelect}>
          {categoryList.map((prd) => (
            // {result.map((prd) => (
              <option value={prd.category}>{prd.category}</option>
          ))}
        </select>
        <br/>

      </div>

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
            category={product.category}
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
            category={product.category}
            /> 
        ))}

      </ul>

      {/* {isSearch &&  */}
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
      {/* } */}
      <br/>
        
    </section>
  );
};

export default Products;
