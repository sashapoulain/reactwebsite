import React from 'react';
import './Program.css';
import program1 from '../../assets/image/program11.jpg'
import program2 from '../../assets/image/program22.jpg'
import program3 from '../../assets/image/program33.jpg'
import programicon1 from '../../assets/image/gradiationwhite.png'
import programicon2 from '../../assets/image/masterwhite.png'
import programicon3 from '../../assets/image/postwhite.png'

const Programs = () => {
   return (
      <div className='programs' >
         <div className='program'>
            <img src={program2} />
            <div className='caption'>
               <img src={programicon1}/>
               <p>Graduation Degree</p>
            </div>
         </div>
         <div className='program'>
            <img src={program1} />
            <div className='caption'>
               <img src={programicon2}/>
               <p>Masters Degree</p>
            </div>
         </div>
         <div className='program'>
            <img src={program3} />
            <div className='caption'>
               <img src={programicon3}/>
               <p>Post Graduation</p>
            </div>
         </div>
      </div>
   )
}

export default Programs
