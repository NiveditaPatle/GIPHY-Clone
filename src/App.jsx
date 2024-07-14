import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import Home from './pages/Home'
import Category from './pages/Category'
import SearchPage from './pages/Search'
import GifPage from './pages/single-gif'
import Favorites from './pages/Favorites'
import GifProvider from './context/gif-context'


const router = createBrowserRouter([
  {
    element:<AppLayout/>,

    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/:category',
        element:<Category/>
      },
      {
        path: '/search/:query',
        element:<SearchPage/>
      },
      {
        path: '/:type/:slug',
        element:<GifPage/>
      },
      {
        path: '/favorites',
        element:<Favorites/>
      },
     
    ]
  }
])

function App() {
  

  return (
    <GifProvider>
       <RouterProvider router={router}/>
    </GifProvider>
  )
}

export default App
