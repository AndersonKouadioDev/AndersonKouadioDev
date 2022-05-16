import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'; //React Router
import ReactDOM from 'react-dom/client';
import SSRProvider from 'react-bootstrap/SSRProvider';
import './index.css';
import App from './View/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SSRProvider>
      <Router basename="/build">
        <App />
      </Router>
    </SSRProvider>
  </React.StrictMode>
);
