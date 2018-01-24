import React from "react";
import { Provider } from "react-redux";
import Store from "./Store";

const App = () => {
  return (
    <Provider store={Store}>
      <h2>App</h2>
    </Provider>
  );
};

export default App;
