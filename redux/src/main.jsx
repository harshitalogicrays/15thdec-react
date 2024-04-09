import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Provider } from 'react-redux'
import mystore from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={mystore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
