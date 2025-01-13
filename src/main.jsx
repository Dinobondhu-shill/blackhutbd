
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { route } from './Route/Router.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(

    <RouterProvider router={route}> 
    </RouterProvider>
)
