import React from "react";
import { Provider } from "react-redux";
import Store from "./Store";
import ApplicationContainer from "./containers/ApplicationContainer";

const App = () => {
  return (
    <Provider store={Store}>
      <ApplicationContainer />
    </Provider>
  );
};

export default App;
