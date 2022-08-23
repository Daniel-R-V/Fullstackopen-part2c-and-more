import { useEffect, useState } from "react"
import axios from "axios"

function App() {
    const [countries, setCountries] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        axios.get("https//restcountries.com/v3.1/all").then((response) => {
            setCountries(
                response.data.map(({ name, capital, area, languages, flags }) => ({
                    name: name.common,
                    capital,
                    area,
                    languages,
                    flags
                }))
            )
        })
    }, [])

    const handleChange = (event) => setName(event.target.value)

    const filterCountries = countries.filter((country) => country.name.includes(name))

    return (
        <div>
            <p>
                find countries
                <input value={name} onChange={handleChange} />
            </p>
        </div>
    )
}
export default App
