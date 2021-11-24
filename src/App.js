
import './App.css';
import {React, useState } from 'react';
import Main from './components/Main'
import Store from './Store';






function App() {
  const[store, setStore] = useState(Store);
  
    return(
      <div className="App">
        <nav className="navbar">
        <ul> 
          <h1 className="first-header"> MY  FRIENDS   PROFILE. </h1>
        <h3>There are {Store.length} friends in this profile. </h3>
        </ul>
        </nav>
        
        <Main main={store}/> 
        <nav className="side-nav" nav={store}/>
              
      
      </div>
  ) 
}

export default App;
