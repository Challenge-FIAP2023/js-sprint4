import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aplicativo from './routes/Aplicativo.jsx'
import LixeiraInteligente from './routes/LixeiraInteligente.jsx'
import ColetaSeletiva from './routes/ColetaSeletiva.jsx'
import Feedbacks from './routes/Feedbacks.jsx'
import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import Cadastro from './routes/Cadastro.jsx'

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
      {path: '/login', element: <Login />},
      {path: '/sobre', element: <Sobre />},
      {path: '/cadastro', element: <Cadastro />}
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
