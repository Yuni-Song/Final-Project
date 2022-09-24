
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
import { AddButton } from './Addbutton';
import { Removebutton } from './Removebutton';
export function Productlist()
{

  const [prod, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://127.0.0.1:3001/products`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      }}).then((response) => {
      setPost(response.data);
   
    });
  }, []);
  if (!prod) return null;

  console.log(prod);



  async function addproduct(productId,productNumber=1) {
    let user = JSON.parse(localStorage.getItem('user'));
  
    const adder = {
      "productId":productId,
      "productNumber":productNumber
    
  }
  let response = await axios.post(`http://127.0.0.1:3001/cart/${user.id}`
  , adder);
  console.log(response);
}



  return (
<div class="row  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"  >

   {prod.allProducts.map((item) =>(
   
  <Card  key={item} style={{ width: '20rem',margin: '1rem' }}>
 
  <Card.Img variant="top" src={item.imagePath} />
  <Card.Body>
  
    <Card.Title>{item.productName}</Card.Title>
    <Card.Text>
    Price {item.price} DKK
    </Card.Text>
  
    <AddButton productId={item.productId}/>
  <Removebutton productId={item.productId} />
  </Card.Body>
</Card>

   ))}
</div>



  
    );
  };
  





    