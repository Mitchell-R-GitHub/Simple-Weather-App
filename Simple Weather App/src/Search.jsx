let Search = ({setSearch}) => {
    //Update the search field with the value entered by the user.
    let updateSearch = (e) =>  {setSearch(e.target.value); }
    
    return(<input className="form-control" type="text" placeholder="Enter a city here to get started." onChange={updateSearch}></input>);
}

export default Search