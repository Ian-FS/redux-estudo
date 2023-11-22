// considere esse reducer para os próximos exemplos
function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'REDUZIR':
      return state - 1;
    default:
      return state;
  }
}

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('ACTION', action);
  console.log('PREV_STATE', store.getState());
  const result = next(action);
  console.log('NEW_STATE', store.getState());
  console.groupEnd();

  return result;
};

const { applyMiddleware, compose } =
  window.__REDUX_DEVTOOLS_EXTESION_COMPOSE__ || Redux;

const composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const store = Redux.createStore(reducer, enhancer);

console.log(store.getState());

store.dispatch({ type: 'INCREMENTAR' });
