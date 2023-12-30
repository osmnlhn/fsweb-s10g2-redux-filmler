import { combineReducers } from 'redux';

import movieReducer from './movieReducer'
import favoriteReducer from "./favoritesReducer";

const reducers=combineReducers({
    movie:movieReducer,
    favorites:favoriteReducer,
});

export default reducers;