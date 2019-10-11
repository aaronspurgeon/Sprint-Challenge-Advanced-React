import React from 'react';
import ClassData from './Components/ClassData/ClassData';
import NavBar from './Components/NavBar/NavBar';
import './styles.scss';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ClassData />
    </div>
  );
}

export default App;
