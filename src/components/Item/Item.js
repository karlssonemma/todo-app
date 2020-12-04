import React from 'react'
import './Item.css'
import { GoTrashcan } from 'react-icons/go';
import { CgRadioCheck, CgCheckO } from 'react-icons/cg';


const Item = (props) => {

    const deleteTodo = () => {
        props.setTodos(props.todos.filter((el) => el.id !== props.todo.id ))
    }

    const checkTodo = () => {
        // props.todo.completed = !props.todo.completed
        
        //BORDE GÅ FINT ATT BRUKE FILTER HÄR MED? ALTERNATIVT ANNAN METOD
        props.setTodos(props.todos.map(item => {
            if (item.id === props.todo.id) {
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))

        console.log(props.todo)
        console.log(props.todos)
    }
    
    return(
        <li className={`item ${props.todo.completed ? 'completed' : ''}`}>
            <button onClick={checkTodo} className='item__btn checked__btn'>
                {
                props.todo.completed 
                ? <CgCheckO className='checked__btn-icon'/> 
                : <CgRadioCheck className='checked__btn-icon' />
                }
            </button>
            <p className='item__text'>{props.item}
            <span>{props.description}</span>
            </p>
            
            <button onClick={deleteTodo} className='delete__btn'>
                <GoTrashcan className='delete__btn-icon' />
            </button>
        </li>
    )
}

export default Item