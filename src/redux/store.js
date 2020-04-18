import {createStore} from 'redux';
import reducers from './reducers/videoReducers';
const store = createStore(reducers, {
  suggestionList: [],
  categoryList: [],
});

export default store;
