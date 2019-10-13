import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.components";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      searchField: ""
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://api.myjson.com/bins/clfxi")
      .then(response => response.json())
      .then(pictures => this.setState({ pictures: pictures }));
  }

  render() {
    const { pictures, searchField } = this.state;
    const filterdpictures = pictures.filter(picture =>
      picture.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Homs Old Pictures</h1>
        <SearchBox
          placeholder="Search Picture"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList pictures={filterdpictures}></CardList>
      </div>
    );
  }
}
export default App;
