import {
  SET_CATEGORY_LIST,
  SET_SELECTED_MOVIE,
  SET_SUGGESTION_LIST,
  CLEAR_SELECTED_MOVIE,
  ERROR,
  LOADING,
} from '../types/videoTypes';

const initial_state = {
  payload: {},
  error: false,
  loading: false,
};

const video = (state = initial_state, action) => {
  switch (action.type) {
    case SET_CATEGORY_LIST: {
      return {...state, ...action.payload, error: false, loading: false};
    }
    case SET_SELECTED_MOVIE: {
      return {...state, ...action.payload, loading: false, error: false};
    }
    case SET_SUGGESTION_LIST: {
      return {
        ...state,
        selectedMovie: action.payload.movie,
        loading: false,
        error: false,
      };
    }
    case CLEAR_SELECTED_MOVIE: {
      return {...state, ...action.payload, loading: false, error: false};
    }
    case LOADING: {
      return {...state, loading: true, error: false};
    }
    case ERROR: {
      return {...state, error: true};
    }
    default:
      return state;
  }
};

export default video;
