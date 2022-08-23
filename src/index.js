import React from 'react';
import ReactDOM from 'react-dom/client';
// import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import { UserProvider } from './context/UserContext';
import { NotificationProvider } from './context/NotificationContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </UserProvider>
  </React.StrictMode>
);

