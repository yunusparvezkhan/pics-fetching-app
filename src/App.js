import React from 'react';
import unsplash from "./api/unsplash-api";
import SearchBar from "./components/SearchBar";
import "semantic-ui-css/semantic.min.css";


class App extends React.Component {

  constructor() {
    super();
    this.state = { images: [], msg: "" };
    this.searchFunc = this.searchFunc.bind(this);
    console.log(this.state.images);
  }

  async searchFunc(input) {
    const res = await unsplash.get("/search/photos", {
      params: { query: input },
    });

    this.setState({ images: res.data.results }, () => {
      this.setState({ msg: "Found " + this.state.images.length + " images that matches your query" })
    })
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmission={this.searchFunc} />
        <div>
          {this.state.msg}
        </div>
      </div>
    )
  }
}

export default App;