import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyARaXR_PJKjCfRewXs_ubE74QziZnLUjig",
  authDomain: "distribuidordehierros.firebaseapp.com",
  projectId: "distribuidordehierros",
  storageBucket: "distribuidordehierros.appspot.com",
  messagingSenderId: "831446012204",
  appId: "1:831446012204:web:f4bf3b7844142171989c89",
  measurementId: "G-D87WFWYGJY"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
