import React, { useState } from 'react';
import './Country.css'
const Country = ({ country,handleVisitedCountries }) => {
    // console.log(handleVisitedCountries);
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
      setVisited(visited ? false : true) 
      handleVisitedCountries(country);
    }
    // console.log(country.area.area);
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
           <h3>Name:{country.name.common}</h3> 
           <p>
            Population:{country.population.population}
           </p>
           <p>Area: {country.area.area}{country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
           <button onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>
        </div>
    );
};

export default Country;