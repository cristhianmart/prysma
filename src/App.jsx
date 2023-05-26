import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Resources/Home"
import Contacto from "./components/Resources/Contacto"
import Biografia from "./components/Resources/Biografia"
import Login from "./components/Resources/Login"


const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Erros 404: pagina no encontrada</h1>
  },
  {
    path: '/contacto',
    element: <Contacto/>,
    errorElement: <h1>Erros 404: pagina no encontrada</h1>
  },
  {
    path: '/sobremi',
    element: <Biografia/>,
    errorElement: <h1>Erros 404: pagina no encontrada</h1>
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <h1>Erros 404: pagina no encontrada</h1>
  },

])

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
