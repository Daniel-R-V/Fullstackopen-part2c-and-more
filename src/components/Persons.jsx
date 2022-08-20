import Person from './Person'


 const Persons = ({persons, filterPerson}) => (
    <>
    {persons
       .filter(person => person.name.toLowerCase().includes(filterPerson))
       .map(person => <Person name={person.name} number={person.number} />)
    }
    </>
 )

export default Persons;