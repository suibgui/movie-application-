const movies = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.movie);

    case "REMOVE":
      return state.filter(
        x =>
          x.name.indexOf(action.title) !== -1 && x.rank.length >= +action.rating
      );

    default:
      return state === [] ? "nothing" : state;
  }
};
export default movies;
