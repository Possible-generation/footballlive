import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import Logo from '../component/logoworld.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <nav className='bg-white dark:bg-gray-900 dark:text-white drop-shadow-md  h-10 lg:h-14 lg:flex  lg:items-center lg:pl-16 lg:pr-20 lg:px-4 relative font-sans font-bold justify-between'>
        <Link to='/' className='   '>
          <img src={Logo} alt='' className='w-[200px] h-10' />
        </Link>

        <div
          onClick={handleClick}
          className='lg:hidden block absolute top-0 right-0 cursor-pointer translate-x-[-100%, 60%] text-3xl mb-10 mr-3'
        >
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul
          className={
            click
              ? 'bg-white dark:bg-gray-800 lg:dark:bg-none  left-0 opacity-100 transition-all z-[999] lg:grid lg:static lg:grid-cols-6 lg:gap-1 lg:ml-14 mt-4 xs:h-[94vh]'
              : ' flex flex-col absolute  left-[-100%] opacity-100 transition-all lg:flex lg:flex-row lg:static lg:gap-6 lg:justify-end ml-14 '
          }
        >
          <li className=' lg:flex lg:ml-28'>
            <Link
              to='/'
              onClick={closeMobileMenu}
              className='text-center p-2 w-full table hover:text-red-600 lg:pt-0 lg:p-0 pt-5'
            >
              Today's match
            </Link>
          </li>
          <li
            className=' lg:flex'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/football-ranking'
              onClick={closeMobileMenu}
              className='text-center p-2 w-full table hover:text-red-600 lg:p-0'
            >
              football league table{' '}
              <div className='hidden lg:contents'>
                {' '}
                <i className='fa fa-caret-down' />
              </div>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          {/* <li className=' lg:flex '>
            <Link
              to='/flashscore'
              onClick={closeMobileMenu}
              className='text-center p-2 w-full table hover:text-red-600 lg:p-0'
            >
              Flashscore
            </Link>
          </li> */}
          {/* <li className=' lg:flex '>
            <Link
              to='/Prediction'
              onClick={closeMobileMenu}
              className='text-center p-2 w-full table hover:text-red-600 lg:p-0'
            >
              Prediction
            </Link> */}
          {/* </li> */}
          {/* <li className=' lg:flex '>
            <Link to='/news' onClick={closeMobileMenu}>
              News
            </Link>
          </li> */}
          {/* <li className=' lg:flex'>
            <Link
              to='/goals-highlight'
              onClick={closeMobileMenu}
              className='text-center p-2 w-full table hover:text-red-600 lg:p-0'
            >
              Goal Hightlight
            </Link>
          </li> */}
          <li className=' lg:flex '>
            <Link
              to='/contact'
              onClick={closeMobileMenu}
              className='text-center p-2 w-full table hover:text-red-600 lg:p-0'
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
