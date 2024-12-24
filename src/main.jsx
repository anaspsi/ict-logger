import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/ict'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
