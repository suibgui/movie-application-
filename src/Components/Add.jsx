import React, { Component } from "react";
import { connect } from "react-redux";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: 0,
      movie: this.props.movie
    };
  }

  movie = { name: "", img: "", rank: "" };
  inputChange = e => {
    switch (e.id) {
      case "name":
        this.movie.name = e.value;

        break;
      case "img":
        this.movie.img = e.value;
        break;
      case "rank":
        this.movie.rank = "".padEnd(e.value, "*");
        break;
      default:
        break;
    }
    this.setState({
      movie: Object.assign({}, this.movie)
    });
  };
  range = e => {
    this.inputChange(e);
    this.setState({ range: e.value });
  };
  add = () => {
    this.props.add(this.state.movie);
    this.movie = { name: "", img: "", rank: "" };
    this.setState({
      movie: Object.assign({}, this.movie)
    });
  };

  render() {
    return (
      <div
        id="modal"
        onClick={e => {
          e.target.id === "modal" ? this.props.hide() : false;
        }}
        className={this.props.className}
      >
        <div className="modal-body">
          <h2>add new movie</h2>
          <input
            onChange={e => this.inputChange(e.target)}
            id="name"
            type="text"
            placeholder="movie name"
            className="modal-inp"
            value={this.state.movie.name}
          />
          <input
            onChange={e => this.inputChange(e.target)}
            id="img"
            type="text"
            placeholder="image link"
            className="modal-inp"
            value={this.state.movie.img}
          />
          <b>
            Rank : <span>{this.state.range}</span>
          </b>
          <input
            value={this.state.range}
            onChange={e => this.range(e.target)}
            id="rank"
            step="1"
            min="0"
            max="5"
            type="range"
            class="modal-range"
          />
          <button onClick={() => this.add()} className="new">
            add
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    className: state.modal ? "modal" : "modal hide"
  };
};
const mapDispatchState = dispatch => {
  return {
    inputChange: e => {
      dispatch({
        type: "TITLE-FILTER",
        title: e.value
      });
    },
    add: movie => {
      dispatch({
        type: "ADD",
        movie: movie
      });
    },
    hide: () => {
      dispatch({
        type: "TOGGLE-MODAL"
      });
    },
    movie: { name: "", img: "", rank: 0 }
  };
};

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchState
)(Add);

export default ModalContainer;
