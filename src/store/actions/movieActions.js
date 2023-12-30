import movies from "../../data";

export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE="ADD_MOVIE";

export const deleteMovie = (id) => {
  return ({ type: DELETE_MOVIE, payload: id });
}

export const addMovie=(movies) =>{
  return ({type:ADD_MOVIE, payload:movies});
}