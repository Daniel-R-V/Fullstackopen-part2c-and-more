const Filter = ({filterPerson, handleFilterPerson}) => {
    return <p>filter shown with <input value={filterPerson} onChange={handleFilterPerson} /></p>
}

export default Filter;