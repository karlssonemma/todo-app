import React, { useEffect } from 'react'
import './ItemList.css'

//import components
import Item from '../Item/Item'

const ItemList = (props) => {

    return(
        <ul className='items__container'>
            {
                props.todos.map( (todo) => 
                <Item 
                    todos={props.todos} 
                    setTodos={props.setTodos} 

                    description={todo.description}
                    item={todo.text} 
                    key={todo.id}
                    todo={todo}
                />)
            }
            
        </ul>
    )
}


export default ItemList