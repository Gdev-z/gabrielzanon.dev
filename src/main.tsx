import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
// Importe a função getRouter do arquivo onde você a definiu
import { getRouter } from './router' 
import './styles.css'

// Use a função que contém o basepath: '/gabrielzanon.dev'
const router = getRouter()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)