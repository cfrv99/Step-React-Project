import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export const Categories = ({selectCategory,filterProducts,currentCategory}) => {
  const [categories, setCategories] = useState([]);
  //const [selectedCategory, setSelectedCategory] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((data) => data.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);
console.log(currentCategory.id);
  const onHandleSelectCategory = (category) => {
    filterProducts(category.id);
    selectCategory(category);
  };
  return (
    <div>
      <ListGroup>
      <ListGroupItem
            onClick={() => onHandleSelectCategory({})}
            active={false}
            tag="button"
            action
          >
            All
          </ListGroupItem>
        {categories.map((c) => (
          <ListGroupItem
            onClick={() => onHandleSelectCategory(c)}
            key={c.id}
            active={currentCategory.id===c.id}
            tag="button"
            action
          >
            {c.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
