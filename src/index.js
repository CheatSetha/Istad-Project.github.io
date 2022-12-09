import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { centralStore } from './store/centralStore';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <Provider store={centralStore}>
     <App/>
   </Provider>
   </BrowserRouter>
  </React.StrictMode>
);
