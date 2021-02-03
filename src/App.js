import './App.css';
import { Button,Container,Row,Col } from 'reactstrap';
import { Products } from './Products';
import { Navi } from './Navi';
import { Categories } from './Categories';
import { useState,useEffect } from 'react';

function App() {
  const [selectedCategory,setSelectedCategory] = useState({});
  const [products,setProducts] = useState([]);
  const filterProductByCategory=(categoryId)=>{
    const response = [];
    console.log(categoryId);
    let url = `http://localhost:3000/products`;

    if(categoryId!==undefined || categoryId !== null ){

      url =+ `?categoryId=${categoryId}`;

    }
    fetch(url).then(data=>data.json()).then(res=>{

      setProducts(res);
    })
  }
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        setProducts(response);
      });
  }, []);
  return (
    <div className="App">
      <Container>
      <h1>{selectedCategory.categoryName}</h1>
        <Navi/>
        <Row>
          <Col xs={3}>
            <Categories
            filterProducts = {filterProductByCategory}
            selectCategory = {setSelectedCategory}
            currentCategory = {selectedCategory}/>
          </Col>
          <Col xs={9}>
            <Products currentCategory = {selectedCategory} products = {products}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
