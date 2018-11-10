import { createStore, combineReducers } from "redux";
import moviesReducer from "./reducers/movies";
import ratingReducer from "./reducers/ratingFilter";
import titleReducer from "./reducers/titleFilter";
import modalReducer from "./reducers/modal";

const store = createStore(
  combineReducers({
    moviesList: moviesReducer,
    rating: ratingReducer,
    title: titleReducer,
    modal: modalReducer
  })
);
let movieList = [
  {
    name: "the avangers 3",
    img:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
    rank: "***"
  },
  {
    name: "jumangi",
    img:
      "http://www.wheninmanila.com/wp-content/uploads/2018/01/movies-january-2018-4.jpg",
    rank: "**"
  },
  {
    name: "captin marvin",
    img:
      "http://www.arm-film.com/wp-content/uploads/2017/08/Captain-Marvel-2018-768x1088.jpg",
    rank: "***"
  },
  {
    name: "tomb raider",
    img:
      "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/ALICIA-VIKANDER-1224758.jpg",
    rank: "*****"
  },
  {
    name: "rambo",
    img:
      "https://4.bp.blogspot.com/-NLzyFqdItYk/WSQkXFIBpVI/AAAAAAAANYs/bXZct_iP5q8UiXzIYkL0JO4upEoKoP4pQCLcB/s1600/rambo-tiger-shroff-upcoming-movie-poster-release-date-star-cast-Moviez-beat-2018.jpg",
    rank: "*****"
  },
  {
    name: "tomb raider",
    img:
      "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/ALICIA-VIKANDER-1224758.jpg",
    rank: "*****"
  }
];

store.dispatch({ type: "ADD", movie: movieList });

export default store;
