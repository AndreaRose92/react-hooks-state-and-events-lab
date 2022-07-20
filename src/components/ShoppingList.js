import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState("All")
  
  const handleCategoryChange = (e) => {
    setSelectedCategory((selectedCategory) = e.target.value)
  }
  
  function isSelected(item) {
    if (item.category === selectedCategory) {return item} else if (selectedCategory === "All") {return item} else {return null}  
  }

  let selecteddItems = items.filter(isSelected)


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selecteddItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
