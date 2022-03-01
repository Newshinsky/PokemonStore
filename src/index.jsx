
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from './store/configureStore';


const store = configureStore()
export const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <PersistGate load={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate >
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
