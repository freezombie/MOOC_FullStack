import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Content from './components/Content';

function App() {
    const [countryData,setCountryData] = useState([]);
    const [filteredCountryData, setFilteredCountryData] = useState([]);
    const url = 'https://restcountries.eu/rest/v2/all';

    useEffect(() => {
        axios.get(url).then(res => {
            setCountryData(res.data);
        })
    }, [])

    const modifySearchString = (event) => {
        const searchString = event.target.value;
        setFilteredCountryData(countryData.filter(country =>
            country.name.match(new RegExp(searchString, 'i'))))
    }

    return (
        <div>
            <form>
                <p>Find Countries: </p> <input onChange={modifySearchString}></input>
            </form>
            <Content data={filteredCountryData}/>
        </div>
    );
}

export default App;
