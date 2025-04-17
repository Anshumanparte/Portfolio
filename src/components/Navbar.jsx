import React,{ useEffect ,useState } from 'react'
import { Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {logo,menu,close} from '../assets'
import { navLinks } from '../constants'
import { styles } from '../styles/styles'
import { log } from 'three/tsl'

const Navbar = () => {

  const [Active, setActive] = useState("")
  const [Toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX } w-full py-5 flex justify-between items-center fixed top-0 left-0 z-20 `}>
      <div className='flex items-center  w-full justify-between mx-auto max-w-7xl'>
        <Link
        to='/'
        className='flex items-center gap-2'
        onClick={() => {
          
          setActive("")
          window.scrollTo(0,0)
        }}
        >
        
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> 
            Anshuman Parte&nbsp;
            <span className='sm:block hidden'>| Frontend Developer</span>
          </p>
        </Link>
        <ul className="flex-row gap-4 list-none sm:flex hidden flex-1 justify-end items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.id}
                className={
                  `${Active === link.title ? "text-white": "text-[var(--secondary)]"}
                    text-[18px] font-medium cursor-pointer hover:text-white`
                }
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
            {/* mobile device */}
        <div 
        className='sm:hidden flex flex-1 justify-end items-center'
        >
          <img 
          src={Toggle ?  close : menu } 
          alt="menu" 
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle(!Toggle)}
          />
          <div className={`${Toggle ? ' right-0' : '-right-[170px]'} 
            p-6 black-gradient absolute flex top-20  mx-4 my-2 min-w-[140px] z-10 rounded-xl  transition-all ease-in-out duration-300`}>

                <ul className="flex-col flex items-start  gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.id}
                    className={
                      `${Active === link.title ? "text-white": "text-[var(--secondary)]"}
                        text-[18px] font-medium cursor-pointer hover:text-white`
                    }
                    onClick={() =>{
                      setToggle(!Toggle)
                      setActive(link.title)}}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            
          </div>


        </div>
        
      </div>
    </nav>
  )
}

export default Navbar