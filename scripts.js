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

const logger = (store) => (next) => (action) => next(action);

const middleware = Redux.applyMddleware(logger);

const store = Redux.createStore(reducer, middleware);

console.log(store.getState());

store.dispatch({ type: 'INCREMENTAR' });
