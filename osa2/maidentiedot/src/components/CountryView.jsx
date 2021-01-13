import React from 'react';
import CapitalWeather from './CapitalWeather';

const CountryView = ({country}) => {
    if(typeof country !== 'undefined' && 'name' in country) {
        return (            
            <div>
                <h1>{country.name}</h1>
                <div style={{ display: "flex", flexWrap: "wrap"}}>
                    <div>

                        <p><b>Capital: </b>{country.capital}</p>
                        <p><b>Population: </b>{country.population}</p>
                        <h2>Languages</h2>
                        <ul>
                            {typeof country.languages !== 'undefined' ? country.languages.map(lang =>
                                <li key={lang.name}>{lang.name}</li>) : ''}
                        </ul>
                    </div>
                    <div style={{ maxWidth: "30vw", marginLeft: "auto", maxHeight: "20vh" }}>
                        <img style={{ minWidth: "180px", maxWidth: "100%", maxHeight: "100%" }} src={country.flag} alt={"The flag of " + country.name} />
                    </div>
                </div>
                <CapitalWeather capital={country.capital}/>
            </div>
        )
    } else {
        return(<></>)
    }
    
}

export default CountryView;