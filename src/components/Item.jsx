import React, {useContext} from 'react'
import { Link } from 'react-router-dom';

const Item = ({info}) =>{

    
    return ( 
        <Link to={`/detalle/${info.id}`} className='producto'>
            <img src={info.img} alt=''></img>
            <h1>{info.name}</h1>
            <h3>{info.description}</h3>
            <h4>$ {info.price}</h4>
        </Link>
    )
}

export default Item;