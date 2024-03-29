import { useState } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Pages/Home'
import { MyAccount } from './Pages/MyAccount'
import { MyOrder } from './Pages/MyOrder'
import { MyOrders } from './Pages/MyOrders'
import { NotFound } from './Pages/NotFound'
import { SingIn } from './Pages/SingIn'
import { ShoppingCardProvider } from './Context'



const AppRoutes = () => {
  let routes = useRoutes([
  {
    path:'/home',
    element: <Home />
  },
  {
    path:'myaccount',
    element: <MyAccount />
  },
  {
    path:'myorder',
    element: <MyOrder />
  },
  {
    path:'myorders',
    element: <MyOrders />
  },
  {
    path:'signin',
    element: <SingIn />
  },
  {
    path:'/*',
    element: <NotFound />
  },
])

return routes

}


function App() {



  return (
    
    <>
    <ShoppingCardProvider>
    <BrowserRouter>
    <Navbar />
    <AppRoutes />      
    </BrowserRouter>
    </ShoppingCardProvider>
  </>
  )
}

export default App
