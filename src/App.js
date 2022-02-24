import Products from "./components/Product/Products";
import Header from "./components/Layout/Header"
// import SearchBox from "./components/Product/SearchBox";
import {useState} from 'react';

function App() {

//------------------CALL API---------------------

  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const [enteredValue, setEnteredValue] = useState('');

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch(
  //       'https://react-http-838c9-default-rtdb.firebaseio.com/products.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const responseData = await response.json();

  //     const loadedProducts = [];

  //     for (const key in responseData) {
  //       loadedProducts.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //       });
  //     }
  //     console.log(loadedProducts);

  //     setProducts(loadedProducts);
  //     setIsLoading(false);
  //   };

  //     fetchProducts().catch((error) => {
  //     setIsLoading(false);
  //   });
  //   console.log('Test');
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }
//----------------FUNCTIONS-----------------------
const [inputText, setInputText] = useState(""); // SearchBox state

let inputHandler = (e) => {
  //convert input text to lower case
  var lowerCase = e.target.value.toLowerCase();
  setInputText(lowerCase);
  // console.log(lowerCase);
};

  return (
    <main>
      <div><Header/></div>
      <div className="main">
      <h1>Search</h1>
      <div className="search">
        <input
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </div>
      <Products input={inputText}/>
    </main>
  );
}
// import { useState } from "react";

export default App;
