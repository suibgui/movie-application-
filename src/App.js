import React, { Component } from "react";
import FilterContainer  from "./Components/Filter";
import "./App.css";
import  MoviesListContainer  from "./Components/MovieList";
import  ModalContainer from "./Components/Add";


class App extends Component {
 
  render() {

    return (
      <div className="App">

        <FilterContainer  />
        <MoviesListContainer  />
        <ModalContainer />
      </div>
    );
  }
}

export default App;
