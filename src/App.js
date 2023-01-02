import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Axios from "axios";



function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    Axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }



  return (
    <div className="App">
      Email: <input type="text" value={email} onChange={handleEmail} />
      Password: <input type="text"  value={password} onChange={handlePassword} />
      <button onClick={handleApi}> Submit </button>
    </div>
  );
}

export default App;
