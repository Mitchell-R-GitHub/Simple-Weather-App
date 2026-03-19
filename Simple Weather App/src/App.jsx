import Search from './Search.jsx';

import SearchSuggestions from './SearchSuggestions.jsx';

import WeatherReport from './WeatherReport.jsx'

import { useState } from 'react';

let App = () => {
  let [search, setSearch] = useState();

  let [city, setCity] = useState();
  
  return(
      <div className="d-flex flex-column align-items-center justify-content-center text-white">

        <h1 className="p-3 m-3">Weather Station</h1>

        <div className="container d-flex flex-column align-items-center justify-content-center bg-secondary rounded p-3 m-3">
          <Search setSearch={setSearch}/>
      
          <SearchSuggestions search={search} setSearch={setSearch} setCity={setCity}/>
        </div>
          
          <WeatherReport city={city}></WeatherReport>
      
      </div>
  );
}

export default App
