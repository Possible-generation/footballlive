import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? 'hidden w-[200px] lg:absolute top-10 text-center lg:bg-white p-2 rounded-sm drop-shadow-lg dark:bg-gray-800'
            : 'w-[200px] lg:absolute top-10 text-center bg-white p-2 rounded-sm drop-shadow-lg dark:bg-gray-800'
        }
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className='hover:text-red-500 cursor-pointer p-2 '>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
