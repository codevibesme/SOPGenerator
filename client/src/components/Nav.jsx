
import {hamburger} from '../assets/icons/index';
import { Link } from 'react-router-dom';
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className='relative padding-x py-8  z-10 w-full bg-white shadow-lg shadow-slate-400'>
        <nav className='flex justify-between items-center max-container'>
            <Link to="/">
                <img src='https://effizient.ca/assets/img/logo.png' alt='logo' height={300} width={180}  className='ml-10'/>
            </Link>
           
            <ul className='flex-1 flex justify-center items-center max-lg:hidden gap-16 sm:justify-center'>
            {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                relative='path'
                className='font-montserrat leading-normal text-xl text-[#007bff] font-semibold'
              >
                {item.name}
              </a>
            </li>
          ))}
            </ul>
         
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
        </nav>
    </header>
  )
}

export default Nav