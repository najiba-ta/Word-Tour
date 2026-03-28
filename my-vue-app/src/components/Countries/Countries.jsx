import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries , setVisitedCountries] = useState([])
    const handleVisitedCountries = (country) =>{
        console.log('handle visited country clicked', country.name.common);
    }

    const countriesData = use (countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h2>In the countries:{countries.length}</h2>
            <h3>Total country visited :{handleVisitedCountries} </h3>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} 
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;