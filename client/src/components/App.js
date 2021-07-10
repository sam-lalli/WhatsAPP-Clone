import React from 'react';
import Login from './Login'
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage()

  return (
    id ? <Dashboard id={id}/> : <Login onIdSubmit={setId}/>
  );
}

export default App;
