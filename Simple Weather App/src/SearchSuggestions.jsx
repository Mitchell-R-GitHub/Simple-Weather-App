import {useState, useEffect} from 'react';

let SearchSuggestions = ({search, setSearch, setCity}) => {

    let [results, setResults] = useState();
    
    //Fetch cities matching user input for search suggestion.
    let getSearchSuggestions = async () => {
        try{
            let response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + search + "&count=10&language=en&format=json");
            
            let data = await response.json();

            setResults(data.results);
        
        } catch (error) {
            console.log(`An unexpected error has occured while attempting to fetch search suggestions. ${error}`)
        }
    }

    useEffect(() => {
        getSearchSuggestions();
    }, [search]);

    //Set city and clear form input.
    let submitSearch = (result) => {
        setCity(result);
        
        setSearch("");
    }
    
    return(
        <ul className="d-flex flex-column text-white">
            {results ? results.map((result) => <button className='btn btn-transparent text-white' onClick={() => submitSearch(result)}>{result.name + ", " + result.admin1}</button>) : null}
        </ul>
    );
}

export default SearchSuggestions