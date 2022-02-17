import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider store={store}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
