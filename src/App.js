import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {

  const [notes, setNotes] = useState([])
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: ' 040-123456' },
    { name: 'Ada Lovelace', number: ' 39-44-5323523' },
    { name: 'Dan Abramov', number: ' 12-43-234345' },
    { name: 'Mary Poppendieck', number: ' 39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterPerson , setFilterPerson ] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  
  useEffect(hook, [])

  console.log('render', notes.length, 'notes');







  const addPerson = (event) => {
    event.preventDefault();
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }else{
      const newPerson = {
        name: newName,
        number: ' ' + newNumber,
      }
      setPersons(persons.concat(newPerson));
      setNewName('')
    }
  }

  const handleFilterPerson = (event) => {
    setFilterPerson(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterPerson={filterPerson} handleFilterPerson={handleFilterPerson}/>
      <h3>add a new</h3>
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterPerson={filterPerson}/>
    </div>
  )
}

export default App
