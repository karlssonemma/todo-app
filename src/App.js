import { useState } from 'react';
import './App.css';

//import components
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import ItemList from './components/ItemList/ItemList'

function App() {

  let [input, setInput] = useState([])

  return (
    <main className="App">
      <Header />
      <Input setInput={setInput} />
      <ItemList input={input} />
    </main>
  );
}

export default App;
