import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'; //React Router
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SSRProvider from 'react-bootstrap/SSRProvider';
import './index.css';
import App from './View/App';

const theme = createTheme({
  palette: {
    primary: {
      main:"#6F7835",
    },
    secondary:{
      main:"#8A7E66"
    },
    action:{
      active:"#6F7835"
    }
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SSRProvider>
      <Router basename="/">
      <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
      </Router>
    </SSRProvider>
  </React.StrictMode>
);
