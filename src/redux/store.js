import {createStore} from 'redux';
import reducers from './reducers/videoReducers';
const store = createStore(reducers, {video: 'platzi'});

export default store;
