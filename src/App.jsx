import React from 'react';
import Todo from './components/Todo';
import './App.css'

function App() {
  return (
    <div className='app w-screen h-screen flex flex-col pt-3 items-center bg-black overflow-y-auto'>
      <Todo/>
    </div>
  );
}

export default App;
