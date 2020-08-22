import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setPersons(data.results)); 
  });

  return (
    <div className="App">
      <header className="App-header">
      {
        persons.map(person => 
          <Randomuser
            profile = {person.picture.large}
            title = {person.name.title}
            first = {person.name.first}
            last = {person.name.last}
            gender = {person.gender}
            email = {person.email} >
         </Randomuser>)
      }
      </header>
    </div>
  );
}

function Randomuser(props){

  const style = {
    boxShadow: '5px 5px 10px gray',
    width: '450px',
    paddingTop: '20px',
    backgroundColor: '#007ACC'
  }
  
  return (
    <div style = {style}>
      <img src={props.profile} alt="random-pictures"/>
      <h2>{props.title} {props.first} {props.last}</h2>
      <h3>{props.gender}</h3>
      <h3>{props.email}</h3>
    </div>
  );
}

export default App;
