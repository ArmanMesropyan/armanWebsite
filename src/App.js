import React from 'react';
import {Routes ,  Route } from 'react-router-dom';
import './App.css';
import Todos from './todos/todos';
import NewPage from './newPage/newPage';
import Navbar from './newPage/navbar/navbar';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Todos/>}/>
        <Route path='/newpage' element={<NewPage/>}/>    
      </Routes>
      </>
    </div>
  );
}

export default App;
