import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Landing/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
