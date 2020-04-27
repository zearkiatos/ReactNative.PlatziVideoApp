import React from 'react';
import Api from '../../services/api';
import {
  SET_CATEGORY_LIST,
  SET_SELECTED_MOVIE,
  SET_SUGGESTION_LIST,
  CLEAR_SELECTED_MOVIE,
  ERROR,
  LOADING,
} from '../types/videoTypes';

export const clearSelectedMovie = () => dispatch => {
  dispatch({
    type: CLEAR_SELECTED_MOVIE,
    payload: {
      movie: null,
    },
  });
};

export const setSelectedMovie = item => async dispatch => {
  console.log(item);
  dispatch({
    type: SET_SELECTED_MOVIE,
    payload: {
      movie: item,
    },
  });
};

export const setSelectedMovieByText = text => async dispatch => {
  dispatch({
    type: LOADING,
  });
  try {
    const movies = await Api.searchMovie(text);
    dispatch({
      type: SET_SELECTED_MOVIE,
      payload: {
        movie: movies[0],
      },
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: ERROR,
      payload: {
        errorMessage: 'Ha ocurrido un error',
      },
    });
  }
};

export const setCategoryList = () => async dispatch => {
  dispatch({
    type: LOADING,
  });
  try {
    const categoryList = await Api.getMovies();

    dispatch({
      type: SET_CATEGORY_LIST,
      payload: {
        categoryList,
      },
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: ERROR,
      payload: {
        errorMessage: 'Ha ocurrido un error',
      },
    });
  }
};

export const setSuggestionList = limit => async dispatch => {
  dispatch({
    type: LOADING,
  });
  try {
    const suggestionList = await Api.getSuggestion(limit);
    dispatch({
      type: SET_SUGGESTION_LIST,
      payload: {
        suggestionList,
      },
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: ERROR,
      payload: {
        errorMessage: 'Ha ocurrido un error',
      },
    });
  }
};
