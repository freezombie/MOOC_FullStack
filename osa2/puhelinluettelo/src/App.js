import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('');
  const [ filter, setFilter] = useState('');

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