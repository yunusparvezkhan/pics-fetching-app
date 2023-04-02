import React from 'react';
import "./../styles/SearchBar.css";
import "semantic-ui-css/semantic.min.css";


const SearchBar = () => {
    return (
        <div className='ui segment'>
            <form className='ui form'>
                <div className="ui icon input field" id="search-input">
                    <input type="text" name="seachQuery" placeholder="Search Image..." />
                    <i className="circular search link icon" />
                </div>
            </form>
        </div>
    )
}

export default SearchBar