import React from 'react';
import "./../styles/SearchBar.css";
import "semantic-ui-css/semantic.min.css";


class SearchBar extends React.Component {

    onInputChange(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <div className='ui segment' >
                <form className='ui form'>
                    <div className="ui icon input field" id="search-input">
                        <input type="text" name="seachQuery" placeholder="Search Image..." onChange={this.onInputChange} />
                        <i className="circular search link icon" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar