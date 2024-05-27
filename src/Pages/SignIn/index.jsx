import { useContext, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";

function SignIn(){
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const form = useRef(null)

    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    //Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignIn = () => {
        const stringifiedSignOut = JSON.stringify(false)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(false)
        //Redirect
        return <Navigate replace to={'/'}/>
    }
//Funcion para crear una cuenta a través de u formulario
    const createAnAccount = () => {
        const formData = new FormData(form.current)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        //TODO: Remove this console.log
        console.log(data)

        //Create account
        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account', stringifiedAccount)
        context.setAccount(data)
        //Sign In
        handleSignIn()
    }

    //Vista 1 login si el usuario tiene cuenta
    const renderLogin = () => {
        return (
        <div className="flex flex-col w-80">
                <p>
                    <span className="font-light text-sm">Email: </span>
                    <span>{parsedAccount?.email}</span>
                </p>
                <p>
                    <span className="font-light text-sm">password: </span>
                    <span>{parsedAccount.password}</span>
                </p>
                <Link 
                to={'/'}
                >
                    <button className="bg-white border font-semibold transition-transform border-blue-500/70 hover:bg-blue-500/70 hover:text-white hover:border-white disabled:bg-gray-500/90 text-blue-500/90 w-full rounded-lg py-3 mt-4 mb-2"
                            onClick={() => handleSignIn()}
                            disabled={!hasUserAnAccount}
                    >
                        Log In
                    </button>
                </Link>
                <div className="text-center">
                    <a className="font-light text-sm underline underline-offset-4" href="/">Forgot my password</a>
                </div>
                <button 
                    className="border border-black text-white disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3" 
                    disabled={hasUserAnAccount}
                    onClick={() => setView('create-user-info')}
                    >
                    Sign up
                </button>
            </div>
        )
    }

//Vista 2 Login si el usuario desea crear una cuenta
    const renderCreateUserInfo = () => {
        return (
            <form ref={form} className="flex flex-col gap-4 w-80">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-light text-sm">Your name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={parsedAccount?.name}
                        placeholder="Peter"
                        className="rounded-lg border border-black placeholder:font-light font-medium placeholder:text-sm text-sky-600/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-light text-sm">Your email:</label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={parsedAccount?.email}
                        placeholder="email@example.com"
                        className="rounded-lg border border-black placeholder:font-light font-medium placeholder:text-sm text-sky-600/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-light text-sm">Your password:</label>
                    <input 
                        type="text"
                        id="password"
                        name="password"
                        defaultValue={parsedAccount?.password}
                        placeholder="*******"
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm text-sky-600/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <Link to="/">
                    <button 
                        className='bg-black text-white w-full rounded-lg py-3'
                        onClick={() => createAnAccount()}
                    >
                    Create
                    </button>
                </Link>
            </form>
        )
    }

    const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() :renderLogin()
    return (
        <Layout>
            <h1 className="font-medium text-xl text-center mb-6 w-80">
                ¡Welcome!
            </h1>
            {renderView()}
        </Layout>
            

        
    )

}

export { SignIn };