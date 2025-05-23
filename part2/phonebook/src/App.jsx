import { useState, useEffect } from 'react'
import personService from './services/persons'

const Filter = ({ text, value, handleChange }) => (
  <div>{text}
    <input value={value} onChange={handleChange} />
  </div>
)

const PersonForm = ({ addPerson, text1, text2, newName, newNumber, handleNameChange, handleNumberChange, buttonText }) => (
  <form onSubmit={addPerson}>
    <div>{text1} <input value={newName} onChange={handleNameChange} /></div>
    <div>{text2} <input value={newNumber} onChange={handleNumberChange} /></div>
    <div>
      <button type="submit">{buttonText}</button>
    </div>
  </form>
)

const Person = ({ person, deletePerson }) => <div> {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button> </div>

const Persons = ({ persons, deletePerson }) => (
  <>
    {persons.map(person => (<Person key={person.name} person={person} deletePerson={deletePerson} />))}
  </>
)


const App = () => {
  const [persons, setPersons] = useState([])
  const [filterQuery, setFilterQuery] = useState('')
  const [filterResults, setFilterResults] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setFilterResults(initialPersons)
      })
  }, [])

  const handleFilterChange = (event) => {
    const query = event.target.value
    setFilterQuery(query)

    const filteredResults = persons.filter(person => person.name.toLowerCase().includes(query.toLowerCase()))
    setFilterResults(filteredResults)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {

      if (confirm(`${newName} is already added to phonebook. Do you want to replace the old numer with a new one?`)) {
        const personToUpdate = persons.find(p => p.name === newName)
        personService
          .update(personToUpdate.id, { name: personToUpdate.name, number: newNumber })
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id === personToUpdate.id ? returnedPerson: p))
            setFilterResults(persons.map(p => p.id === personToUpdate.id ? returnedPerson: p))
            setFilterQuery("")
            setNewName("")
            setNewNumber("")
          })
      } else {
        setNewName("")
        setNewNumber("")
      }

    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setFilterResults(persons.concat(returnedPerson))
          setFilterQuery("")
          setNewName("")
          setNewNumber("")
        })
    }
  }

  const deletePerson = id => {
    const personToDelete = persons.find(p => p.id === id)
    if (confirm(`Delete ${personToDelete.name} ?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          setFilterResults(persons.filter(p => p.id !== id))
          setFilterQuery("")
        }
        )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text="filter shown with " value={filterQuery} handleChange={handleFilterChange} />

      <h3>Add a new person</h3>
      <PersonForm text1="name: " text2="number: " newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
        buttonText="add" addPerson={addPerson} />

      <h3>Numbers</h3>
      <Persons persons={filterResults} deletePerson={deletePerson} />
    </div>
  )
}

export default App