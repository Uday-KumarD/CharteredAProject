import { createRoot } from 'react-dom/client'
// import "/node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <App />
  </StrictMode>
)
