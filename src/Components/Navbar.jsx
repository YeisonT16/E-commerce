import { NavLink } from 'react-router-dom'

function Navbar() {

    const activeStyle = 'underline underline-offset-4'

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
                <li>
                    <NavLink 
                        to='/'
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>ALL
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='sports'
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Sports
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        className={({isActive}) => isActive ? activeStyle : undefined
                    
                    }>Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
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
                    0
                </li>
            </ul>
        </nav>
    )
}

export { Navbar };