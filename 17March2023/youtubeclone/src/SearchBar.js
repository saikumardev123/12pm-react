
import { useState } from 'react';
function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState('');

    const search = (event) => {
        event.preventDefault();
        console.log("searchterm", searchTerm);
        props.onSearchtermChange(searchTerm);
    }

    return (
        <div>
            <br></br> <br></br>
            <form>
                <input type="text" onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} size="50"></input> &nbsp;&nbsp;&nbsp;
                <button onClick={search}>Search</button>
            </form>
        </div>
    )

}
export default SearchBar;