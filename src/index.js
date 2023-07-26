import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Route,Routes,BrowserRouter} from "react-router-dom"

import MainPage from './App';
import Menu from './menu/menu';
import Vision from './Vision/vision';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
  <Route element={<MainPage/>} path="/"></Route>
  <Route element={<Menu/>} path="/menu"></Route>
  <Route element={<Vision/>} path="/vision"></Route>
   </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

