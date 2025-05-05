import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore
import reducers from "./reducers";

import App from "./App";

// Use configureStore instead of createStore
const store = configureStore({
  reducer: reducers, // Reducers here
  // Redux Toolkit automatically adds thunk middleware and dev tools
});

// Wrap your App with Provider and pass the store
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
