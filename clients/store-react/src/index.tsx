import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './routes/About';
import Home from './routes/Home';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes >
        <Route element={<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />}/>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
