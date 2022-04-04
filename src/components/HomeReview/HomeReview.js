import React from 'react';

const HomeReview = (props) => {
    const {img, name, comment, ratings} = props.headphone;
    return (
        <div className='cart'>
            <img src={img} alt="" />
           
        </div>
    );
};

export default HomeReview;