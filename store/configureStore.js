import alunoReducer from './alunosReducer.js';
import aulaReducer from './aulasReducer.js';

const reducers = Redux.combineReducers({ alunoReducer, aulaReducer });
const store = Redux.createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
