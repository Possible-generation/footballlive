import React from 'react';
import { Link } from 'react-router-dom';

function Laliga() {
  return (
    <div className=' box-border  font-sans bg-whitedark:bg-gray-900 dark:text-white  mt-10 mx-5 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16  pr-5'>
      <div className='lg:hidden mb-5'>
        <ul className=' uppercase text-base font-semibold'>
          <li className='hover:text-red-600 pt-3'>
            <Link to='/PremierLeague'>Premier league</Link>
          </li>
          <li className='hover:text-red-600 pt-3'>
            <Link to='/League1'>Ligue 1</Link>{' '}
          </li>
          <li className='hover:text-red-600 pt-3'>
            <Link to='/SerieA'> Serie A</Link>{' '}
          </li>
          <li className='hover:text-red-600 pt-3'>
            <Link to='/Laliga'>La Liga</Link>{' '}
          </li>
          <li className='hover:text-red-600 pt-3'>
            <Link to='/Bundesliga'> Bundesliga</Link>
          </li>
          <li className='hover:text-red-600 pt-3'>
            <Link to='/ChampionLeague'> Champions League</Link>
          </li>
          <li className='hover:text-red-600 pt-3'>
            <Link to='/Bundesliga'>Europa League</Link>
          </li>
        </ul>
      </div>
      <div className='font-bold text-2xl  lg:text-4xl pb-5'>La Liga</div>
      <hr />
      <br></br>
      <div
        id='scoreaxis-widget-c4579'
        style={{
          borderWidth: '1px',
          bordeColor: 'rgba(0, 0, 0, 0.15)',
          borderStyle: 'solid',
          borderRadius: '8px',
          padding: '3px',
          background: 'rgb(255, 255, 255)',
          width: '100%',
          backgroundColor: '#0062b1',
        }}
        data-reactroot=''
      >
        <iframe
          title='La Liga'
          id='Iframe'
          src='https://www.scoreaxis.com/widget/standings-widget/564?links=0&amp;font=0&amp;textColor=%23000000&amp;inst=c4579'
          style={{
            width: '100%',
            border: 'none',
            transition: 'all 300ms ease',
          }}
        ></iframe>
        <script>
          window.addEventListener("DOMContentLoaded",event=>
          {window.addEventListener(
            'message',
            (event) => {
              if (event.data.appHeight && 'c4579' === event.data.inst) {
                let container = document.querySelector(
                  '#scoreaxis-widget-c4579 iframe'
                );
                container &&
                  (container.style.height =
                    parseInt(event.data.appHeight) + 'px');
              }
            },
            !1
          )}
          );
        </script>
      </div>
    </div>
  );
}

export default Laliga;
