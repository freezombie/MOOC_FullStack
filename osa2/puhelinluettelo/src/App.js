import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import {createPerson,getAllPersons, deletePersonFromDb, updatePerson} from './services/persons'

const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('');
    const [ filter, setFilter] = useState('');
    
    useEffect(() => {
        getAllPersons().then(initialNotes => {
            setPersons(initialNotes);
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
        createPerson(personObject)
        .then(returnedPerson => {
            if(typeof returnedPerson !== 'number') {
                setPersons(persons.concat(returnedPerson));
                setNewNumber('');
                setNewName('');
            } else {
                window.alert("Wrong return from server");
            }
        })
    } else {
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
            const oldObj = persons.find(person => person.name === newName);
            const updatedPerson = {
                name: oldObj.name,
                number: newNumber,
            }

            updatePerson(oldObj.id,updatedPerson);
            const newArr = persons.filter(obj =>
                obj.id !== oldObj.id);
            setPersons(newArr.concat(updatedPerson));
        }            
    }
  }

    const deletePerson = (person) => {
        console.log(person);
        if(window.confirm(`Do you really want to delete ${person.name}`)) {
            deletePersonFromDb(person.id);
            setPersons(persons.filter(obj => 
                obj.id !== person.id))
        }
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter change={handleFilterChange}/>
      <h3>Add a new number</h3>
      <PersonForm add={addPerson} nameChange={handleNameChange} numberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  )
}

export default App