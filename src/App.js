import React from 'react';
import './App.css';
import TodoListContainer from './components/TodoListContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListContainer />
      </header>
    </div>
  );
}

export default App;
