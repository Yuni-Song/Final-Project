import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { IndividualProduct } from './components/IndividualProduct';

import {Categories} from './components/categories';
import {Conditional} from './components/meal';
import {Login, Register} from './components/login';
import {Footer} from './components/footer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Productlist } from "./components/productlist";
import { Menu } from './components/menu';
import { Areloggedin, Cart } from './components/cart';
import { NewProducts } from './components/newproducts';

import { Hero } from './components/hero';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    
   
    <>
    
    
    <BrowserRouter>
    
    <Routes>
    

    <Route   path="/"   element={  <Menu />}>
   
  
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/cart" element={<Areloggedin  />}/>
    <Route path="/newarrivals" element={<NewProducts />}/>
    <Route path="/productlist" element={<Productlist  />}/>
 <Route path="/meals" element={<Conditional Categ="meals"/>}/>
 <Route path="/snacks" element={<Conditional Categ="snacks"/>}/>
 <Route path="/drinks" element={<Conditional Categ="drinks"/>}/>
 <Route path="/product" element={<IndividualProduct/>}/>
 <Route exact path="/" element={ <><Hero /> <Categories /></>} />
 

    </Route> 

    
    </Routes> 
  

    </BrowserRouter>
   
   
    <Footer />
    </>
  
);