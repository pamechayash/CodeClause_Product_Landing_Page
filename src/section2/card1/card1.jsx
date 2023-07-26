import React from 'react'
import './card1.css'
function Card1(props) {
  return (
    <div>
        <div className='card1'>
        <img src={props.image} height={300}/>
        <div className="content1">
           <div className='h'>{props.content1}</div>
           {props.content2}
        </div>


    </div>
    </div>
  )
}

export default Card1;