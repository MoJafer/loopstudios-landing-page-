import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'

import { menu } from '../consts'
const Header = () => {
    const [activeMoileMenu, setactiveMoileMenu] = useState(false)
    return (
        <header className='header h-screen p-10 flex flex-col items-start justify-between bg-auto bg-no-repeat bg-center relative' >
            <div className='w-full flex flex-row justify-between items-center text-white'>
                <img src={logo} alt="logo" className='z-10' />
                {activeMoileMenu ?
                    <img src={closeIcon} alt="close-icon" className='md:hidden cursor-pointer z-10' onClick={() => setactiveMoileMenu(prev => !prev)} />
                    :
                    <img src={hamburgerIcon} alt="hamburger-icon" className='md:hidden cursor-pointer z-10' onClick={() => setactiveMoileMenu(prev => !prev)} />
                }
                <div className={` max-md:flex-col max-md:bg-black max-md:w-full max-md:absolute max-md:inset-0 max-md:p-10 max-md:pt-[150px]  ${activeMoileMenu ? 'max-md:flex' : 'max-md:hidden'}`}>
                    {menu.map((link, index) => (
                        <a key={link.id} href={`#${link.id}`} className={`hover:underline max-md:text-3xl underline-offset-8 ${index !== menu.length - 1 ? 'md:mr-8 max-md:mb-5' : 'm-0'}`}>{link.title}</a>
                    ))}
                </div>
            </div>
            <h1 className='lg:w-5/12 md:w-6/12 w-full md:text-5xl text-3xl text-white border-solid border-2 p-5 md:p-10'>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </header>
    )
}

export default Header