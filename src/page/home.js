import React from 'react';
import { Matches } from '../component/Match';
import { Link } from 'react-router-dom';

function home() {
  return (
    <div>
      <div className=' box-border  font-sans bg-white dark:bg-gray-900 my-6 mx-3 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16 pr-5'>
        <div className='font-bold text-2xl  lg:text-4xl pb-5 dark:text-white '>
          Today's match
        </div>
        <hr />
        {Matches.map((match, index, arr) => {
          return (
            <div key={index} className='mt-5 '>
              <div className='flex flex-row  font-sans mb-3'>
                <h1 className='font-sans border-2 rounded border-slate-500 p-1 dark:text-blue-700'>
                  {match.country}: {match.league}
                </h1>
              </div>
              <Link className={match.cName} to={match.path}>
                <div
                  className='bg-slate-400  rounded p-4 px-9 shadow-2xl mr-2
           '
                >
                  <div className=' flex justify-between'>
                    <div className='grid justify-items-center'>
                      <div className=' '>
                        <img
                          className='h-[70px] w-[70px]'
                          src={match.homelogo}
                          alt=''
                        />
                      </div>
                      <h1 className='text-2xl'>{match.homename}</h1>
                    </div>
                    <div className='rounded h-[20px]  my-auto  '>
                      <h1 className='text-lg font-bold w-12 rounded text-center'>
                        {match.scoreupdate}
                      </h1>
                    </div>
                    <div className='grid justify-items-center'>
                      <div className=' '>
                        <img
                          className='h-[70px] w-[70px]'
                          src={match.awaylogo}
                          alt=''
                        />
                      </div>
                      <h1 className='text-2xl'>{match.awayname}</h1>
                    </div>
                  </div>
                  <div className=' bg-pink-700 rounded w-32 text-center lg:ml-[46%] lg:p-2 ml-[40%] mt-2 '>
                    <span>{match.timestatus}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className=' font-sans bg-white dark:bg-gray-900 mt-8 mx-5 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16  pr-5 mb-11'></div>
    </div>
  );
}

export default home;
