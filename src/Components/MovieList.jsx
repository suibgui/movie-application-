import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";

class movies extends Component {
 
  render() {
    return (
      <div className="movie-list">
        {this.props.list !== undefined ? (
          this.props.list.map((x, i) => {
            return <Movie key={i} name={x.name} img={x.img} rank={x.rank} />;
          })
        ) : (
          <b>no movies</b>
        )}

        <div onClick={() => this.props.show()} className="movie">
          <h1 className="add">+</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.moviesList.filter(
      x => x.name.indexOf(state.title) !== -1 && x.rank.length >= state.rating
    )
  };
};
const mapDispatchToProps = dispatch => {
  return {
    show: () => dispatch({ type: "TOGGLE-MODAL" })
  };
};
const MoviesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(movies);

export default MoviesListContainer;
