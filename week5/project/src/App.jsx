// import { useState } from 'react'
import { useRoutes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import CryptoDetailPage from './pages/CryptoDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  

  let element = useRoutes([
     {
      path: '/',
      element: <Home />
     },
     {
      path:'/project',
      element: <CryptoDetailPage />
     },
     {
      path:'*',
      element: <NotFoundPage />
     }
  ])

  return element;
}

export default App
