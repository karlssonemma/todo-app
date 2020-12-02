import React, { useState } from 'react'
import './Input.css'

//import components

let TASKS = []

const Input = ({setInput, input}) => {

    const addItem = () => {
        let item = document.querySelector('.input').value
        TASKS.push(item)
        setInput(TASKS)
        console.log(input)
    }

    
    return(
        <section className='input-section'>
            <input className='input' type='text' />
            <button onClick={addItem}>ADD</button>
        </section>
    )
}

export default Input