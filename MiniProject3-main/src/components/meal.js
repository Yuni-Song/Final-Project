import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React from 'react'
import  { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { AddButton } from './Addbutton';
import { Removebutton } from './Removebutton';



 export function Meal() {
   
  








    const [meals, setMeals] = React.useState(null);

    React.useEffect(() => {
      axios.get(`http://127.0.0.1:3001/categories/meals`,{
        headers: {
          'Access-Control-Allow-Origin': '*',
        }}).then((response) => {
        setMeals(response.data);
     
      });
    }, []);
    if (!meals) return null;
  
    console.log(meals);
    

    return(<div class="row  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"  >
    
    {meals.map((mealy) =>(
    
   <Card  key={mealy.productId}  style={{ width: '20rem',margin: '1rem' }}>
 < Link to={{pathname: `/product?${mealy.productId}`}}>  <Card.Img variant="top" src={mealy.imagePath} /> </Link>
  <Card.Body>
  
    <Card.Title >{mealy.productName}</Card.Title>
    <Card.Text>
    Price {mealy.price}
    </Card.Text>
    <AddButton productId={mealy.productId}/>
    <Removebutton productId={mealy.productId} />
  </Card.Body>
</Card>

   ))}
   </div>
    );
};

export function Snack() {
   
  const [snacks, setSnacks] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://127.0.0.1:3001/categories/snacks`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      }}).then((response) => {
      setSnacks(response.data);
   
    });
  }, []);
  if (!snacks) return null;

  console.log(snacks);
  
  return(<div class="row  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"  >
  
  {snacks.map((snacky) =>(
     
 <Card  key={snacky}  style={{ width: '20rem',margin: '1rem' }}>
<Card.Img variant="top" src={snacky.imagePath} />
<Card.Body>

  <Card.Title  >{snacky.productName}</Card.Title>
  <Card.Text>
  Price {snacky.price}
  </Card.Text>
  <AddButton productId={snacky.productId}/>
  <Removebutton productId={snacky.productId} />
</Card.Body>
</Card>

 ))}
 </div>
  );
};
export function Drink() {
   
  const [drinks, setDrinks] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://127.0.0.1:3001/categories/drinks`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      }}).then((response) => {
      setDrinks(response.data);
   
    });
  }, []);
  if (!drinks) return null;

  console.log(drinks);
  
 

  

  return(<>
    
     
  <div class="row  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"  >
   
  {drinks.map((drinky) =>(
     
 <Card  key={drinky}  style={{ width: '20rem',margin: '1rem' }}>
<Card.Img variant="top" src={drinky.imagePath} />
<Card.Body>

  <Card.Title>{drinky.productName}</Card.Title>
  <Card.Text>
  Price {drinky.price}
  </Card.Text>
  <AddButton productId={drinky.productId}/>
  <Removebutton productId={drinky.productId} />
</Card.Body>
</Card>

 ))}
 </div>
 </> 
  );
};
  
  

  

  
  

  export function Conditional(props) {
    const Categ = props.Categ;
        switch( Categ) {
         case "meals":
           return <Meal />;
           break;
         case "drinks":
           return <Drink />;
           break;
           case "snacks":
           return <Snack />;
           break;
         default:
          return <></>;
       } 
       
       }
    
   




