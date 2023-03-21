import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';



// init redux store 
const store = createStore(
  // init multiple reducer
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  )
)

export default store