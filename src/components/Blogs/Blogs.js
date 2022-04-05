import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog'>
            <div>
<h3>What is Context Api?</h3>
<p><u>Answer:</u>Context Api  pass data through component without props drilling.It stores information in central place and allow access to any component when request it.React Context is a way to manage state globally. </p>
            </div>
            <div>
<h3>What is Semantic Tag?</h3>
<p><u>Answer:</u>Semantic tag describes it's meaning both developer and the browser.Semantic tag can means what will be the part in the document body.Like "section" tag means a section in body.In a body there will be many sections.On the other hand, "header" tag means What is the header of the website.And "header" used just once in website.</p>
            </div>
            <div>
<h3>Inline, block and Inline block element</h3>
<p><u>Answer:</u> A block element always starts with new line and it takes full width.<br/>
An Inline element doesn't start with a new line and It takes only necessary width.<br/>
On the other hand, block-inline element behave like block element but sometimes it use as inline elements.As it's need ,it can change it's behave.
</p>
            </div>
        </div>
    );
};

export default Blogs;