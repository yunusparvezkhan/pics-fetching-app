import React from 'react';
import unsplash from "./api/unsplash-api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import "semantic-ui-css/semantic.min.css";


class App extends React.Component {

  constructor() {
    super();
    this.state = { images: [] };
    this.searchFunc = this.searchFunc.bind(this);
  }

  async searchFunc(input) {
    const res = await unsplash.get("/search/photos", {
      params: { query: input },
    });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmission={this.searchFunc} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;