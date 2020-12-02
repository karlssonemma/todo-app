import React, { useEffect } from 'react'
import './ItemList.css'

//import components


const ItemList = ({input}) => {

    let displayItem = useEffect( () => {
        return(input.map( item => console.log(item)))
    }, [input])
    

    return(
        <ul className='item__container'>
            {displayItem}
        </ul>
    )
}


export default ItemList