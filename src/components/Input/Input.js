import React, { useState } from 'react'
import './Input.css'

//import components


const Input = (props) => {

    const inputTextHandler = (e) => {
        props.setInput(e.target.value)
    }

    const descriptionHandler = (e) => {
        props.setDescription(e.target.value)
    }

    const submitTodoHandler = () => {
        props.setTodos([
            ...props.todos,
            { text: props.input, completed: false, id: Math.random() * 10000, description: props.description }
        ]);
        props.setInput('')
        props.setDescription('')
    }
    
    return(
        <section className='input__container'>
            <div className='input__section'>
                <label for='todo-input'>To do</label>
                <input 
                    autoFocus
                    onChange={inputTextHandler}
                    className='input' 
                    type='text' 
                    value={props.input}
                    id='todo-input'
                />
            </div>
            <div className='input__section'>
                <label for='description-input'>Description</label>
                <input 
                    type='text'
                    onChange={descriptionHandler}
                    className='input' 
                    value={props.description}
                    id='description-input'
                />
            </div>
            <button onClick={submitTodoHandler} className='submit__btn'>+</button>

        </section>
    )
}

export default Input