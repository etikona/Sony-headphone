import React from 'react';

const HomeReview = (props) => {
    const {img, name, comment, rating} = props.headphone;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h6>Comment :{comment}</h6>
            <p>Ratings :{rating}</p>
           
        </div>
    );
};

export default HomeReview;