import React, {Fragment} from 'react';
// import { Card } from 'react-bootstrap';

import {Link} from 'react-router-dom';

function Card({post}){

    const {slug, title, yoast_head_json} = post;
    return(
    <Fragment>
        <div className='col-sm-12 col-md-6 py-5'>
            <div className="card" style={{"width": "35rem"}}>
                <img className="card-img-top" src={`${yoast_head_json.og_image[0]['url']}`} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{title.rendered}</h5>
                    <p className="card-text">{yoast_head_json.description}</p>
                    <Link to={`/blog/${slug}`} className="btn btn-primary">Ver Blog</Link>
                </div>
            </div>
        </div>
    </Fragment> 
    )
}
export default Card;