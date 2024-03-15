import React, { useRef } from 'react'
import './Testimonials.css'
import nextIcon from '../../assets/image/rw.png'
import backIcon from '../../assets/image/lw.png'
import user1 from '../../assets/image/manpp.jpg'
import user2 from '../../assets/image/womanpp.jpg'
import user3 from '../../assets/image/m.jpg'
import user4 from '../../assets/image/womanpp2.jpg'

const Testimonials = () => {

   const slider  = useRef();
   let tx = 0;

   const slideForward = () => {
      if(tx > -50 ){
         tx -=25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
   }

   const slideBackward = () => {
      if(tx < 0 ){
         tx +=25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;

   }
  return (
    <div className='testimonials'>
      <img src={nextIcon} className='next-btn' onClick={slideForward}/>
      <img src={backIcon} className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
         <ul ref={slider}>
            <li>
               <div className='slide'>
                  <div className='user-info'>
                     <img src={user1}/>
                     <div>
                        <h3>Sasha Poulain 1</h3>
                        <span>Eğitim, TURKEY</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Eğitim was one of the best decisions I ve evet made. The supportive community, state-of-the-art facilities and commitment to academic excellence have truly exceeded my expectations.</p>
               </div>
            </li>
            <li>
               <div className='slide'>
                  <div className='user-info'>
                     <img src={user2}/>
                     <div>
                        <h3>Sasha Poulain 2</h3>
                        <span>Eğitim, TURKEY</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Eğitim was one of the best decisions I ve evet made. The supportive community, state-of-the-art facilities and commitment to academic excellence have truly exceeded my expectations.</p>
               </div>
            </li>
            <li>
               <div className='slide'>
                  <div className='user-info'>
                     <img src={user3}/>
                     <div>
                        <h3>Sasha Poulain 3</h3>
                        <span>Eğitim, TURKEY</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Eğitim was one of the best decisions I ve evet made. The supportive community, state-of-the-art facilities and commitment to academic excellence have truly exceeded my expectations.</p>
               </div>
            </li>
            <li>
               <div className='slide'>
                  <div className='user-info'>
                     <img src={user4}/>
                     <div>
                        <h3>Sasha Poulain 4</h3>
                        <span>Eğitim, TURKEY</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Eğitim was one of the best decisions I ve evet made. The supportive community, state-of-the-art facilities and commitment to academic excellence have truly exceeded my expectations.</p>
               </div>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Testimonials
