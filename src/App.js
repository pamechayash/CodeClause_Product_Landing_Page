import logo from './logo.svg';
import './App.css';
import Carousel from './header';
import {useState} from "react"
import Header from './header';
import Sec1 from './section1/sec1';
import Sec2 from './section2/sec2';
function MainPage() {


  return (
    <div className="App">
    <Header/>
   <Sec1/>
   <Sec2/>
       </div>
  );
}

export default MainPage;
