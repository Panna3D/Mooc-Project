import Products from "./components/Product/Products";
import Header from "./components/Layout/Header";
import Carts from "./components/Cart/Cart";

import {useState} from 'react';
import { useSelector} from 'react-redux';

function App() {
// Input store, actions, slices
const showCart = useSelector(state => state.ui.cartIsVisible); 

//----------------FUNCTIONS Filter-----------------------
const [inputText, setInputText] = useState(""); // SearchBox state

let inputHandler = (e) => {
  //convert input text to lower case
  var lowerCase = e.target.value.toLowerCase();
  setInputText(lowerCase);
  // console.log(lowerCase);
};

  return (
    <main>
      <Header/>
      <div>
        { showCart && <Carts/>}
       <h1>Search</h1>
        <div>
          <input
          id="outlined-basic"
          onChange={inputHandler}
          label="Search"
          />
        </div>
      </div>
      <Products input={inputText}/>
    </main>
  );
}

export default App;
