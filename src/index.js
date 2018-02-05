import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";
import registerServiceWorker from "registerServiceWorker";
import { AppContainer } from "react-hot-loader";

import { createStore } from "redux";
import { Provider } from "react-redux";
import todoApp from "reducers/todo";

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  );
};

registerServiceWorker();

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}
