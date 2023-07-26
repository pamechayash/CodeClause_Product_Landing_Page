import React from 'react'
import './sec1.css'
import im from '../assets/chef-experience.webp'
import im1 from '../assets/flexible-mobile.webp'
import im2 from '../assets/fresh-ingredients.webp'
import Card from './card';
function Sec1() {
  return (
    <div>

<h1 className='hd'>465+ million meals shipped </h1> 
<h3 className='sbhd'>See why home cooks stick with the original American meal kit.</h3>
<div className="cardspace">
 <Card image={im} content="5 decades of top restaurant experience --

Our chefs bring high standards to

crafting your meals."/>
 <Card image={im1} content="You're busy, so we're flexible --

Get boxes on your schedule. Skip,

pause, or cancel anytime."/>
 <Card image={im2} content="Fresher ingredients faster

-- 80% of ingredients come directly from

producers."/>
</div>
    </div>

  )
}

export default Sec1;