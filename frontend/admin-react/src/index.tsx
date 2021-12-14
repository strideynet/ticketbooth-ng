import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { UserProvider } from './services/firebase'
import Debug from './routes/Debug'
import Dashboard from './routes/Dashboard'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <Routes >
          <Route element={<App />}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/debug" element={<Debug/>}/>
          </Route>
        </Routes>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
