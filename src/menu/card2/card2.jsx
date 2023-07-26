import React from 'react'
import './card2.css'
function Card2(props) {
  return (
    <div>
          <div className='card1' id='card2' style={{
           border:"0.3px solid black",
           width:"400px",
           boxShadow:"5px 5px 20px 5px rgba(0, 0, 0,0.4)"

          }}>
        <img src={props.image} height={300}/>
        <div className="content1">
           <div className='h'>{props.content1}</div>
           {props.content2}
           <div className='h'>{props.p}</div>
        </div>
   <div className="bt">
  Add To Card
   </div>


    </div>
    </div>
  )
}

export default Card2;