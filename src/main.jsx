
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { route } from './Route/Router.jsx'
import './index.css'
import ContextProvider from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
    <ContextProvider>
<RouterProvider router={route}> 
</RouterProvider>
    </ContextProvider>
    
)
