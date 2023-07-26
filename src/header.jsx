import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navigate = useNavigate();
  function navToMenu(){
  navigate('/menu')
  }
  function navToVision(){
    navigate('/vision')
    }
  return (
   <div className='fr'>
     <div className="c">
   <h1 className='head'>The meal kit that<br/> puts quality first </h1>     
    <div className='menubtn' onClick={navToMenu}>in The Menu</div>
    </div>
    <div className= "bton"
   onClick={navToVision}>Our Vision</div>
   </div>
  );
};

export default Header;
