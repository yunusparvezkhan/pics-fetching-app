import React from 'react';
import axios from "axios";
import SearchBar from "./components/SearchBar";
import "semantic-ui-css/semantic.min.css";


class App extends React.Component {

  constructor() {
    super();
    this.state = { images: [] }
  }

  async searchFunc(input) {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: input },
      headers: {
        Authorization: "Client-ID PLiLgVUo7Z-p2Rkguvg0HYTXUEfu7ORa-5w4lFl1OOo"
      }
    });

    this.setState({ images: res.data.results });
    console.log(this.state.images);
  };


  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmission={this.searchFunc} />
      </div>
    )
  }
}

export default App;