import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './containers/AppRouter/AppRouter';
import ContextProvider from './context/CartContext';

export default function App() {
  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  )
}
