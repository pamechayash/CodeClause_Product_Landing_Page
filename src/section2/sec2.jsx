import React from 'react'
import './sec2.css'
import i from "../assets/craft.webp"
import i1 from "../assets/wellness.webp"
import i2 from "../assets/family-friendly.webp"
import i3 from "../assets/fast-and-easy.webp"
import i4 from "../assets/vegetarian.webp"
import i5 from "../assets/premium-steak.webp"
import i6 from "../assets/ready-to-cook.webp"
import i7 from "../assets/heat-and-eat.webp"
import i8 from "../assets/breakfast.webp"

import Card1 from './card1/card1'
function Sec2() {
  return (
    <div>
        
        <div className='hd'>CHOOSE FROM<br/>
    70+ weekly options</div>
    <div className="card1space">
    <Card1 image={i} content1="CRAFT" content2="Cheese Crisp Burgers"/>
    <Card1 image={i1} content1="WELLNESS" content2="Turkey and Mushroom Lettuce Cups"/>
    <Card1 image={i2} content1="FAMILY FRIENDLY" content2="Mafalda Pasta"/>
    <Card1 image={i3} content1="FAST - EASY" content2="Sheet Pan Cheesy Jalapeño Chicken"/>
    <Card1 image={i4} content1="VEGETARIAN" content2="Quinoa and Vegetable “Fried Rice”"/>
    <Card1 image={i5} content1="PREMIUM" content2="NY Strip Steaks and Herb-Mushroom Pan Sauce"/>
    <Card1 image={i6} content1="READY TO COOK" content2="Pesto Chicken and Orzo"/>
    <Card1 image={i7} content1="HEAT - EAT" content2="Cheesy Truffle Cavatappi"/>
    <Card1 image={i8} content1="BREAKFAST" content2="Fried Egg and Prosciutto Sandwiches"/>
    </div>

    </div>
  )
}

export default Sec2