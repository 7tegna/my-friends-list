
import './App.css';
import {React, useState } from 'react';
import Main from './components/Main'
import Store from './Store';






function App() {
  const[store, setStore] = useState(Store);
  
    return(
      <div className="App">
        <h1> My Friends Profile. </h1>
        <Main main={store}/> 
  
      </div>
  ) 
}

export default App;
