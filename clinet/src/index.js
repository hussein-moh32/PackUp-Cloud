/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes ,Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home ';
import Pricing from './container/Pricing';
import AboutUs from './container/AboutUs';
import Registration from './container/Registration';



ReactDOM.render(
 <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Home'  element={<Home/>} />
      <Route path='/AboutUs'  element={<AboutUs/>} />
      <Route path='/Pricing'  element={<Pricing/>} />
      <Route path='/Registration'  element={<Registration/>} />

    </Routes>
 </BrowserRouter>
 ,
 document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
