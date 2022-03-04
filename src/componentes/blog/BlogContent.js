import React, {Fragment} from 'react';

// import { Card } from 'react-bootstrap';

// import {Link} from 'react-router-dom';

function BlogContent({ blog }){

    
    const { content } = blog;
    console.log(blog);
    return(
    <Fragment>
        <div className='col-sm-12 col-md-12 py-5 px-5'>
            { content.rendered }
        </div>
    </Fragment> 
    )
}
export default BlogContent;