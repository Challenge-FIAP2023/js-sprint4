import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './components/Error.jsx'
import Home from './components/Home.jsx'
import Aplicativo from './components/Aplicativo.jsx'
import LixeiraInteligente from './components/LixeiraInteligente.jsx'
import ColetaSeletiva from './components/ColetaSeletiva.jsx'
import Feedbacks from './components/Feedbacks.jsx'
import Contato from './components/Contato.jsx'
import Sobre from './components/Sobre.jsx'
import './styles/App.css'
import './styles/btn.css'
import './styles/card.css'
import './styles/contato.css'
import './styles/footer.css'
import './styles/header.css'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/aplicativo', element: <Aplicativo />},
      {path: '/lixeira-inteligente', element: <LixeiraInteligente />},
      {path: '/coleta-seletiva', element: <ColetaSeletiva />},
      {path: '/feedbacks', element: <Feedbacks />},
      {path: '/contato', element: <Contato />},
      {path: '/sobre', element: <Sobre />}
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
