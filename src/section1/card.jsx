import React from 'react'
import './sec1.css'
function Card(props) {
  return (
    <div className='card'>
        <img src={props.image} />
        <div className="content">
           {props.content}
        </div>


    </div>
  )
}

export default Card;