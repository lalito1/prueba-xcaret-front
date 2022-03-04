import React, {useEffect,useState,Fragment} from 'react';
import clienteAxios from '../../componentes/config/axios';
import Card from './Card';

function BlogsXcaret(){
    
    const [posts, guardarPost] = useState([]);

    //Query a la api

    const consultarApi = async () => {
        const postsConsulta = await clienteAxios.get('/posteos');
        // console.log(postsConsulta);
        //colocamos los posts en el state
        guardarPost(postsConsulta.data);
    }

    //use effect es similar a componentdidmount y willmount

    useEffect( () => {
        consultarApi();
    },[]);

    return (
        <Fragment>
            
        <h2>Blogs de XCARET</h2>
        <div className="row">
                {posts.map(post => (
                    <Card
                        key={post._id}
                        post={post}
                    />
                ))}
        </div>
        </Fragment>
    )
}

export default BlogsXcaret;