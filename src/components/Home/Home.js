import React from 'react';
import { Link } from 'react-router-dom';
import useHeadphones from '../../hooks/useHeadphones';
import HomeReview from '../HomeReview/HomeReview';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    const [headphones, setHeadphones] = useHeadphones(3);
    return (
        <div>
            <div className='home'>
                <div>
                    <h3>Sony-Wh-1000Xm4</h3>
                    <p className='text'>
                        Industry-leading noise canceling with Dual Noise Sensor technology
                        Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo
                        Up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback)
                        Touch Sensor controls to pause play skip tracks, control volume, activate your voice assistant, and answer phone calls
                        Speak-to-chat technology automatically reduces volume during conversations
                        Superior call quality with precise voice pickup
                        Wearing detection pauses playback when headphones are removed.
                    </p>
                    < button className='order'>Order Now</button>

                </div>

                <img src="image/sony-wh.jpg" alt="" />

            </div>
            <div>
                <div>
             
                    <h4> Customer Reviews</h4>
                    <div className='review'>
                      {
                          headphones.map(headphone => <HomeReview key={headphone.id} headphone={headphone}></HomeReview>)
                      }

                    </div>
                    <Link to='/review' >See More</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;