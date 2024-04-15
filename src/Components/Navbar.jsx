import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../Context';

function Navbar() {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4 text-blue-400/90'

    return (
        <nav className='flex justify-between items-center w-full z-10 top-0 py-5 px-9 text-sm'>
            <ul  className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                        to='/'
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
                <li className='text-black/60'>
                    user@example.com
                </li>
                <li>
                    <NavLink to='/myorders'>My Orders</NavLink>
                </li>
                <li>
                    <NavLink to='/myaccount'>My Account</NavLink>
                </li>
                <li>
                    <NavLink to='signin'>Sign In</NavLink>
                </li>
                <li>
                    🛒{context.count}
                </li>
            </ul>
        </nav>
    )
}

export { Navbar };