import React from 'react'
import './menu.css'
import Card2 from './card2/card2';
import pinto from '../assets/pinto.webp'
import selmon from '../assets/selmon.webp'
import peanut from '../assets/peanut.webp'
import oven from '../assets/oven.webp'
import steak from '../assets/streak.webp'
import white from '../assets/white.webp'
import patato from '../assets/patato.webp'
import muffins from '../assets/muffins.webp'
import soup from '../assets/soup.webp'
import corn from '../assets/corn.webp'
import Beef from '../assets/Beef.webp'
function Menu() {
  return (
    <div className='menu'>
        <div className="strip">Have a Healthy and Delicious Food</div>
        <div className="card2space">
     <Card2 p="Rs 1000"image={pinto} content1="Pinto Bean Tostadas" content2="with Tomatoes, Bell Pepper and Guacamole"/>
     <Card2  p="Rs 1200"image={selmon} content1="Crispy Skin Salmon" content2="with Couscous, Tomatoes and Labneh"/>
     <Card2 p="Rs 1100" image={peanut} content1="Peanut Chicken ans Quinoa Salad" content2="with Avocado and Sesame Dressing"/>
     <Card2 p="Rs 900" image={oven} content1="Oven-Baked Cheesy Italian Chicken" content2="with Garlic-Herb Sweet Potatoes and Green Beans"/>
     <Card2 p="Rs 1100" image={steak} content1="Thai-Style Steak and Noodle Salad" content2="with Mango, Peanuts and Toasted Coconut"/>
     <Card2 p="Rs 800" image={white} content1="Oven-Baked Creamy White Beans and Eggs" content2="with Mushrooms, Spinach and Pita"/>
     <Card2 p="Rs 940" image={patato} content1="Skillet Potato and Kimchi Hash" content2="with Eggs and Spicy Mayo"/>
     <Card2 p="Rs 980" image={muffins} content1="Challah Bread Pudding Muffins" content2="with Dried Fruit and Maple Butter"/>
     <Card2 p="Rs 900"  image={soup} content1="Creamy Red Pepper and Tomato Soup" content2="with Smoked Gouda Toasts"/>
     <Card2 p="Rs 1080" image={corn} content1="Jalapeño Cheesy Corn and Prime Beef Burger" content2="with Arugula Salad and Cilantro-Lime Dressing"/>
     <Card2 p="Rs 600" image={Beef} content1="Beef and Bok Choy Stir-Fry" content2="with Marinated Radishes and Spicy Mayo"/>

     </div>
    </div>
  )
}

export default Menu;