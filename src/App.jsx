import { useContext } from 'react'
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Pages/Home'
import { MyAccount } from './Pages/MyAccount'
import { MyOrder } from './Pages/MyOrder'
import { MyOrders } from './Pages/MyOrders'
import { NotFound } from './Pages/NotFound'
import { SignIn } from './Pages/SignIn'
import { ShoppingCardProvider, initializeLocalStorage, ShoppingCartContext } from './Context'
import { CheckoutSideMenu } from './Components/CheckoutSideMenu'



const AppRoutes = () => {

    const context = useContext(ShoppingCartContext)
    //Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
     //Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
    const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
  {
    path:'/',
    element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />
  },
  {
    path:'/clothes',
    element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />
  },
  {
    path:'/sports',
    element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />
  },
  {
    path:'/electronics',
    element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />
  },
  {
    path:'/furnitures',
    element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />
  },
  {
    path:'/toys',
    element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />
  },
  {
    path:'/others',
    element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />
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
    path:'my-orders/:id',
    element: <MyOrder />
  },
  {
    path:'sign-in',
    element: <SignIn />
  },
  {
    path:'/*',
    element: <NotFound />
  },
])

return routes

}


function App() {

  initializeLocalStorage()

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
