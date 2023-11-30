function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return initial;
  }
}

const initialState = {
  loading: false,
  data: getLocalStorage('data', null),
  error: null,
};

const fetchStarted = 'FETCH_STARTED';
const fetchSuccess = 'FETCH_SUCCESS';
const fetchError = 'FETCH_ERROR';

function reducer(state = initialState, action) {
  switch (action.type) {
    case fetchStarted:
      return { ...state, loading: true };
    case fetchSuccess:
      return { loading: false, data: action.payload, error: null };
    case fetchError:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
}

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }
  return next(action);
};

const localStorage = (store) => (next) => (action) => {
  const response = next(action);
  if (action.localStorage !== undefined) {
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload),
    );
  }
  return response;
};

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const store = Redux.createStore(reducer, enhancer);

function fetchUrl(url) {
  return async (dispatch) => {
    try {
      dispatch({ type: fetchStarted });
      const data = await fetch(url).then((r) => r.json());
      dispatch({ type: fetchSuccess, payload: data, localStorage: 'data' });
    } catch (error) {
      dispatch({ type: fetchError, payload: error.message });
      console.log(error.message);
    }
  };
}

const state = store.getState();
if (state.data === null) {
  store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'));
}
