import React, {useState, useEffect } from 'react';
import CountryView from './CountryView';
import CountryList from './CountryList';
import './content.css';

const Content = ({data}) => {
    const [selectedCountry, setSelectedCountry] = useState({})

    useEffect(() => {
        setSelectedCountry({});
        if(data.length === 1) {
            setSelectedCountry(data[0])
        }
    }, [data])

    if(data.length === 0 || data.length > 10) {
        return(
            <div>
                <p>{data.length === 0 ? 'No results found' : `Too many results found (${data.length})`}</p>
            </div>
        )
    } else if(data.length === 1) {
        return(
            <div className='solocountryview'>
                <CountryView country={selectedCountry} />
            </div>
        )
    } else {
        return(
            <div style={{ display: "flex"}}>
                <div className='countrylist'>
                    <CountryList data={data} setSelectedCountry={setSelectedCountry}/>
                </div>
                <div className='countryview'>
                    <CountryView country={selectedCountry}/>
                </div>
            </div>
        )
    }
}

export default Content;