const initialState = {
  loading: false,
  data: null,
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

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = Redux.createStore(reducer, enhancer);

function fetchUrl(url) {
  return async (dispatch) => {
    try {
      dispatch({ type: fetchStarted });
      const data = await fetch(url).then((r) => r.json());
      dispatch({ type: fetchSuccess, payload: data });
    } catch (error) {
      dispatch({ type: fetchError, payload: error.message });
      console.log(error.message);
    }
  };
}
store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'));
