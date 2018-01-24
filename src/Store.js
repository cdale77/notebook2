import Constants from "./Constants";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import Utils from "./Utils";
import SessionReducer from "./reducers/SessionReducer";
import FlashReducer from "./reducers/FlashReducer";

// Set up the initial state. If there is something in localstorage, grab it. If
// not, then use the specified default state.
const defaultState = Constants.DEFAULT_STATE;
const persistedState = JSON.parse(localStorage.getItem("appState"));
const initialState = persistedState == null ? defaultState : persistedState;

// redux setup
const appReducer = combineReducers({
  session: SessionReducer,
  flash: FlashReducer
});

// clear state on log out
const rootReducer = (state, action) => {
  if (action.type === Constants.ACTIONS.DESTROY_SESSION_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

// disable redux logger in production
let middleware = [thunk];
if (process.env.REACT_APP_DEPLOY_TARGET !== "production") {
  const logger = createLogger();
  middleware = [...middleware, logger];
}

const Store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

// Function to handle persisting the redux store to browser localstorage.
// Necessary if the app state (like login) is going to persist on refresh.
function persistStore() {
  const stringifiedState = JSON.stringify(Store.getState());
  Utils.debounce(localStorage.setItem("appState", stringifiedState));
}

Store.subscribe(persistStore);

export default Store;
