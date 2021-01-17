import React from 'react';

const CountryList = ({ data, setSelectedCountry}) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        const filtered = data.filter(country =>
            country.name.match(new RegExp(event.target.value, 'i')))
        setSelectedCountry(filtered[0]);
    }

    return(
        <>
            <ul>
                {data.map(country => 
                    <li key={country.name}><button onClick={handleClick} value={country.name}>{country.name}</button></li>
                )}
            </ul>
        </>
    )
}

export default CountryList;