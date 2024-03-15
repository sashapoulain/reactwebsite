import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/image/cgv.jpg'
import gallery2 from '../../assets/image/gallery6.jpg'
import gallery3 from '../../assets/image/gallery3.jpg'
import gallery4 from '../../assets/image/gallery4.jpg'
import whiteArrow from  '../../assets/image/arrrwh.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
         <img src={gallery1}/>
         <img src={gallery2}/>
         <img src={gallery3}/>
         <img src={gallery4}/>
      </div>
      <button className='btn dark-btn'>See more here <img src={whiteArrow}/></button>
    </div>
  )
}

export default Campus
