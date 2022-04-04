import React from 'react';
import './Single.css';
const Single = (props) => {
    const {img, name, comment, ratings} = props.headphone;
    return (
        <div className='single'>
            <img src={img} alt="" />
        </div>
    );
};

export default Single;