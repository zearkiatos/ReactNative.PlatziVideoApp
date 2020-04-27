import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reduxThunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers/videoReducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['selectedMovie'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(reduxThunk));

const persistor = persistStore(store);

export {store, persistor};
