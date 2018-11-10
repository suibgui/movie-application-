import React, { Component } from "react";

import { connect } from "react-redux";

class Filter extends Component {

  stars = "*****";

  render() {
    return (
      <div className="filter">
        <div className="search-form">
          <input
            onChange={e => this.props.change(e.target.value)}
            type="text"
            placeholder="Type the movie name to search"
            className="search"
          />
        </div>
        <div className="rank-form">
          <span className="label-rank">Minimum ranking</span>
          <div className="stars">
            {this.stars.split("").map((x, i) => {
              if (i < this.props.rank) {
                return (
                  <Star
                    click={this.props.updateStars}
                    id={i + 1}
                    className="star star-color"
                  />
                );
              }
              return (
                <Star
                  click={this.props.updateStars}
                  id={i + 1}
                  className="star"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export class Star extends Component {

  render() {
    return (
      <span
        onClick={e => {
          this.props.click(e.target.id);
        }}
        className={this.props.className}
        id={this.props.id}
      >
        ★
      </span>
    );
  }
}
const mapStateToProps = state => {
  return {
    rank: state.rating
  };
};
const mapDispatchToProps = dispatch => {
  return {
    change: value =>
      dispatch({
        type: "TITLE-FILER",
        title: value
      }),
    updateStars: val => {
      dispatch({
        type: "RATE-FILTER",
        rating: val
      });
    }
  };
};

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default FilterContainer;
