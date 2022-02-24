// import { useState } from "react";
// import Products from "./Products";
// import classes from './SearchBox.module.css';

const SearchBox = (props) => {
    // const {products} = props;

    // // const [searchResult, setSearchResult] = useState(false);
    // const [enteredValue, setEnteredValue] = useState('');

    // const enteredValueHander = (e) => {
    //     // setSearchResult = false;
    //     setEnteredValue(e.target.value());
    // };

    // let filteredProduct = products.filter(product => {
    //     return product.name.toLowerCase().includes(enteredValue.toLowerCase());
    // })

    // console.log(filteredProduct);

    // const searchButtonHandler = (e) => {
    //     e.preventDefault();
    //     // If entered value is Empty -> return
    //     if (enteredValue.trim().length === 0 || !filteredProduct) {
    //         // setSearchResult = false;
    //         return;
    //     } else { // Else, check if matched value?
    //         // setSearchResult = true;
    //         filteredProduct();
    //     }
    //     enteredValue = '';
    // };

    // return (
    //     <>
    //         <div className={classes.SearchBox}>
    //             <input type='text' onChange={enteredValueHander}/>
    //             <button onClick={searchButtonHandler}>Search</button>
    //         </div>
    // </>
    // )
};

export default SearchBox;