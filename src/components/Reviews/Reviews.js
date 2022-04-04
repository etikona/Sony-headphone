import React from 'react';
import useHeadphones from '../../hooks/useHeadphones';
import Single from '../Single/Single';
import './Review.css';


const Reviews = () => {
 
   const [headphones, setHeadphones] = useHeadphones(7);
 
    return (
        <div className='review'>
      {
          headphones.map(headphone => <Single key={headphone.id} headphone={headphone}></Single>)
      }
                 
        </div>
    );
};

export default Reviews;