import logo from '../assets/images/logo.svg'
import iconFacebook from '../assets/images/icon-facebook.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'
import iconPinterest from '../assets/images/icon-pinterest.svg'
import { menu } from '../consts'

const Footer = () => {
    return (
        <footer className='bg-black text-white p-10 px-20 flex md:flex-row flex-col justify-between'>
            <div className='flex flex-col md:items-start items-center justify-between mb-7'>
                <img src={logo} alt="logo" className="mb-5 md:w-[150px] w-[200px]" />
                <div className='flex flex-col md:flex-row items-center max-md:text-2xl'>
                    {menu.map((m, index) => (
                        <a key={`footer-{m.id}`} href={`#{m.id}`} className="mr-8 max-md:mb-5">{m.title}</a>
                    ))}
                </div>
            </div>
            <div className='flex flex-col md:items-end items-center'>

                <div className='flex flex-row md:mb-5'>
                    <a href='#!' className='mr-3'><img src={iconFacebook} alt="facebook" /></a>
                    <a href='#!' className='mr-3'><img src={iconTwitter} alt="facebook" /></a>
                    <a href='#!' className='mr-3'><img src={iconPinterest} alt="facebook" /></a>
                    <a href='#!' className=''><img src={iconInstagram} alt="facebook" /></a>
                </div>
                <p className='text-gray-400 max-md:mt-10'>202 Loopsutudios. All rights reseverd.</p>
            </div>
        </footer>
    )
}

export default Footer