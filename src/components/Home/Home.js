import React from 'react';
import './Home.css';

const Home = () => {
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
            <div className='img'>
                <img src="image/sony-wh.jpg" alt="" />
            </div>
          </div>
          <div>
              <h4>Reviews</h4>
          </div>
        </div>
    );
};

export default Home;