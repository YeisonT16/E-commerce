import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { MyAccount } from './Pages/MyAccount'
import { MyOrder } from './Pages/MyOrder'
import { MyOrders } from './Pages/MyOrders'
import { NotFound } from './Pages/NotFound'
import { SingIn } from './Pages/SingIn'
import { Navbar } from './Components/Navbar'


const AppRoutes = () => {
  let routes = useRoutes([
  {
    path:'/',
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
])}


function App() {



  return (
    
    <>
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  </>
  )
}

export default App
