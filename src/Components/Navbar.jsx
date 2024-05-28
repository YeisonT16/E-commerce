import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../Context';
import { ShoppingCart } from './ShoppingCart';


function Navbar() {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4 text-blue-400/90'

    //Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

     //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
     //Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }
    //se cambio el orden de los elementos en la funcion renderView, revisar pullrequest platzi
    const renderView = () => {
        if(hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                    <li className='text-black/60'>
                        {parsedAccount?.email}
                    </li>
                    <li>
                        <NavLink 
                            to='/my-orders'
                            className={({isActive}) =>
                            isActive ? activeStyle : undefined
                            }
                            >My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/my-account'
                            className={({isActive}) =>
                                isActive ? activeStyle : undefined
                            }
                            >My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/sign-in'
                            className={({isActive}) =>
                                isActive ? activeStyle : undefined
                            }                    
                            onClick={() => handleSignOut()}
                        >Sign Out
                        </NavLink>
                    </li>
                </>
            )
                
            } else {
                return (
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }                    
                        onClick={() => handleSignOut()}
                    >
                    Sign In
                    </NavLink>
                </li>
                )
            }

        }

    return (
        <nav className='flex justify-between items-center w-full z-10 top-0 py-5 px-9 text-sm'>
            <ul  className='flex items-center gap-3'>
                
                <li className='font-semibold text-lg'>
                    <NavLink 
                        to={`${isUserSignOut ? '/sign-in' : '/'}`}
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Shopi
                    </NavLink>
                </li>
                <li
                    className='hover:text-blue-400/90'
                >
                    <NavLink 
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>ALL
                    </NavLink>
                </li>
                <li
                    className='hover:text-blue-400/90'
                >
                    <NavLink 
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Clothes
                    </NavLink>
                </li>
                <li
                    className='hover:text-blue-400/90'
                >
                    <NavLink 
                        to='sports'
                        onClick={() => context.setSearchByCategory('sports')}
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Sports
                    </NavLink>
                </li>
                <li
                    className='hover:text-blue-400/90'
                >
                    <NavLink 
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Electronics
                    </NavLink>
                </li>
                <li
                    className='hover:text-blue-400/90'
                >
                    <NavLink 
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('furnitures')}
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Furnitures
                    </NavLink>
                </li>
                <li
                    className='hover:text-blue-400/90'
                >
                    <NavLink 
                        to='/toys'
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Toys
                    </NavLink>
                </li>
                <li
                    className='hover:text-blue-400/90'
                >
                    <NavLink 
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                    {renderView()}
                <li className='flex items-center'>
                    <ShoppingCart/>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar };