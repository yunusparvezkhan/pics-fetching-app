import React from 'react';
import "./../styles/SearchBar.css";
import "semantic-ui-css/semantic.min.css";


class SearchBar extends React.Component {
    state = { term: "", lastSubmit: "" };

    onFormSubmit(event) {
        event.preventDefault();
        this.setState({ lastSubmit: this.state.term })
        console.log(this.state.term)
    }

    render() {
        return (
            <div className='ui segment' >
                <form className='ui form' onSubmit={(e) => this.onFormSubmit(e)} >
                    <div className="ui icon input field" id="search-input">
                        <input type="text" name="seachQuery" placeholder="Search Image..." onChange={(e) => this.setState({ term: e.target.value })} value={this.state.term} />
                        <i className="circular search link icon" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar