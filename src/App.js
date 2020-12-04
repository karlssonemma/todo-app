import { useState } from 'react';
import './App.css';

//import components
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import ItemList from './components/ItemList/ItemList'


function App() {

  let [input, setInput] = useState('')
  let [description, setDescription] = useState('')
  let [todos, setTodos] = useState([])

  return (
    <main className="App">
      <Header />
      <Input 
        setInput={setInput} 
        input={input} 
        todos={todos} 
        setTodos={setTodos} 
        description={description}
        setDescription={setDescription}
      />
      <ItemList
        todos={todos} 
        setTodos={setTodos} 
      />
    </main>
  );
}

export default App;
