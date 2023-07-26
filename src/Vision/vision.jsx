import React from 'react'
import "./vision.css"
import vsn from '../assets/vsn.png'
function Vision() {
  return (
    <div className='vsn'>
        <div className='head' style={{width:"100vw",textAlign:"center"}}>VISION</div>
        <div className="cont">
        Our food system—the way in which food is grown and distributed—is complicated, and making good choices for your family can be difficult. We are changing that: By partnering with farmers to raise the highest-quality ingredients, by creating a distribution system that delivers ingredients at a better value and by investing in the things that matter most—our environment and our communities. This will be a decades-long effort, but with each Blue Apron home chef, together we can build a better food system.
        </div>
        <div className="imgdiv"
        style={{
            background: `url(${vsn})`,
            backgroundSize:"cover"

        }}
        >
         
        </div>
        <div className="cont">
        At the grocery store, it can be hard to tell whether food is high quality and sustainably grown. We are partnering with the foremost sustainability experts to create better standards for growing food and raising animals. This means better outcomes for our environment, guaranteed markets for our farmers and higher quality ingredients for our home chefs.
        </div>
{/* <img src={vsn} alt="" style={{
    width:"80vw"
}} /> */}

    </div>
  )
}

export default Vision;