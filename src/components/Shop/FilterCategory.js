import { useState } from "react";

const FilterCategory = (props) => {
    // Filter category state
    const [selectItem, setSelectItem] = useState("Candy"); 
    let isSelectCategory = false;


    const selectHandler = (e) => {
        isSelectCategory = true; // check is select?
        let item = e.target.value;
        setSelectItem(item);
    };
    
    return(
        <div>
            <select value={selectItem} onChange={selectHandler}>
                <option selected value="Candy">Candy</option>
                <option value="Cake">Cake</option>
            </select>
        </div>
     );
}

export default FilterCategory;