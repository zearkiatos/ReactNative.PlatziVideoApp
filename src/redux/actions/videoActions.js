import React from 'react';
import {
  SET_CATEGORY_LIST,
  SET_SELECTED_MOVIE,
  SET_SUGGESTION_LIST,
  CLEAR_SELECTED_MOVIE,
  ERROR,
  LOADING,
} from '../types/videoTypes';

const clearSelectedMovie = () => dispatch => {
  dispatch({
    type: CLEAR_SELECTED_MOVIE,
    payload: {
      movie: {},
    },
  });
};

export default {clearSelectedMovie};
