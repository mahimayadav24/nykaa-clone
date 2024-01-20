import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../NavSelect/navselect.css'

const SearchBar = () => {
    return (
   
            <div className="input-box">
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Search on Nykaa" />
                <SearchIcon />
            </div>
 
    )
}

export default SearchBar