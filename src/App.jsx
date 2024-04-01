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
import { CheckoutSideMenu } from './Components/CheckoutSideMenu'



const AppRoutes = () => {
  let routes = useRoutes([
  {
    path:'/home',
    element: <Home />
  },
  {
    path:'my-account',
    element: <MyAccount />
  },
  {
    path:'my-order',
    element: <MyOrder />
  },
  {
    path:'my-orders',
    element: <MyOrders />
  },
  {
    path:'my-orders/last',
    element: <MyOrder />
  },
  {
    path:'sign-in',
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
    <CheckoutSideMenu />   
    </BrowserRouter>
    </ShoppingCardProvider>
  </>
  )
}

export default App
