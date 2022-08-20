const PersonForm = ({newName,newNumber,addPerson, handleNewName,handleNewNumber}) => {
    return (
        <form>
        <div>
        name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
    )
}

export default PersonForm;