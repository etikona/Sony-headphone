import React from 'react';
import './Single.css';
const Single = (props) => {
    const {img, name, comment, rating} = props.headphone;
    return (
        <div className='single'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h6>Comment:{comment}</h6>
            <p>Ratings :{rating}</p>
        </div>
    );
};

export default Single;