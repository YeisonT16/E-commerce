import { useState } from 'react'
import './App.css'
import { Home } from './Pages/Home'
import { MyAccount } from './Pages/MyAccount'
import { MyOrder } from './Pages/MyOrder'
import { MyOrders } from './Pages/MyOrders'
import { NotFound } from './Pages/NotFound'
import { SingIn } from './Pages/SingIn'

function App() {


  return (
    <>
      <div className='bg-gray-300'>
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <NotFound />
        <SingIn />      
      </div>
     
    </>
  )
}

export default App
