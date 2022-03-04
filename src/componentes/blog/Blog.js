import React, {useEffect, useState,Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import clienteAxios from '../../componentes/config/axios';

function Blog(name){
    
    const [blog, guardarBlog] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let nombre  = name.match.params.name;
    // console.log(nombre);
    //use effect es similar a componentdidmount y willmount
    useEffect(()=> {
        clienteAxios.get('/getfullcontent/'+nombre)
            .then(function(response){
                guardarBlog(response.data);
                setLoading(false);
                
            }
        );

    },[nombre]);

    if(isLoading){
        return <div className='App'>Loading...</div>
    }

    return (
        <Fragment>
        <h2>Blog</h2>
        <div className="row">

            <div className="content" dangerouslySetInnerHTML={{__html: blog[0].content.rendered}}></div>
                
        </div>
        </Fragment>
    )
}

export default withRouter(Blog);