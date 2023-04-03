import React from 'react';
import SearchBar from "./components/SearchBar";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {


  seachFunc(input) {
    console.log(input);
  };


  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmission={this.seachFunc} />
      </div>
    )
  }
}

export default App;