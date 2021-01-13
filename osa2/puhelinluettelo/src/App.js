import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('');
    const [ filter, setFilter] = useState('');
    const url = 'http://localhost:3000/persons'
    
    useEffect(() => {
        axios.get(url).then(res => {
            setPersons(res.data);
        })
    },[])

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const addPerson = (event) => {
    event.preventDefault();
    if(newName==='' || newNumber==='') {
        window.alert("You must submit both a name and a phonenumber");
    }
    else if(!persons.some((person) => person.name === newName)) {
        const personObject =  {
            name: newName,
            number: newNumber,
        }
        setPersons(persons.concat(personObject));
    } else {
        window.alert(`${newName} is already added to phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter change={handleFilterChange}/>
      <h3>Add a new number</h3>
      <PersonForm add={addPerson} nameChange={handleNameChange} numberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App