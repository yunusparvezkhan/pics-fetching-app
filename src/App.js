import React from 'react';
import axios from "axios";
import SearchBar from "./components/SearchBar";
import "semantic-ui-css/semantic.min.css";


class App extends React.Component {


  seachFunc(input) {
    // console.log(input);
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: input },
      header: {
        Authorization: 'Clint-ID PLiLgVUo7Z-p2Rkguvg0HYTXUEfu7ORa-5w4lFl1OOo',
      }
    });
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