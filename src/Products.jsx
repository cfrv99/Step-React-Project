import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

export const Products = ({products,currentCategory}) => {
  
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr style={{backgroundColor:p.categoryId===currentCategory.id ? 'black' : ''}} key={i}>
              <th scope="row">{p.id}</th>
              <td>{p.productName}</td>
              <td>{p.quantityPerUnit}</td>
              <td>{p.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
