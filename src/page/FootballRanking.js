import React from 'react';
import { Link } from 'react-router-dom';
import Premier_league from './PremierLeague';

function Footballranking() {
  return (
    <div>
      <Premier_league />
    </div>
    // <div className=' box-border  font-sans bg-white mt-10 mx-5 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16  pr-5'>
    //   <div className='lg:hidden'>
    //     <ul className=' uppercase text-base font-semibold'>
    //       <li className='hover:text-red-600  pt-4'>
    //         <Link to='/PremierLeague'>Premier league</Link>
    //       </li>
    //       <li className='hover:text-red-600  pt-5'>
    //         <Link to='/League1'>Ligue 1</Link>{' '}
    //       </li>
    //       <li className='hover:text-red-600  pt-5 '>
    //         <Link to='/SerieA'> Serie A</Link>{' '}
    //       </li>
    //       <li className='hover:text-red-600 pt-5 '>
    //         <Link to='/Laliga'>La Liga</Link>{' '}
    //       </li>
    //       <li className='hover:text-red-600  pt-5'>
    //         <Link to='/Bundesliga'> Bundesliga</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className='font-bold text-2xl  lg:text-4xl pb-5'>Premier League</div>
    //   <hr />
    //   <br></br>
    //   <div
    //     id='scoreaxis-widget-31f2e'
    //     style={{
    //       borderWidth: '1px',
    //       bordeColor: 'rgba(0, 0, 0, 0.15)',
    //       borderStyle: 'solid',
    //       borderRadius: '8px',
    //       padding: '10px',
    //       background: 'rgb(255, 255, 255)',
    //       width: '100%',
    //       backgroundColor: '#0062b1',
    //     }}
    //     data-reactroot=''
    //   >
    //     <iframe
    //       title='premier league'
    //       id='Iframe'
    //       src='https://www.scoreaxis.com/widget/standings-widget/8?links=0&amp;bodyBackground=%230062b1&amp;font=0&amp;textColor=%23000000&amp;inst=31f2e'
    //       style={{
    //         width: '100%',
    //         border: 'none',
    //         transition: 'all 300ms ease',
    //       }}
    //     ></iframe>
    //     <script>
    //       window.addEventListener("DOMContentLoaded",event=>
    //       {window.addEventListener(
    //         'message',
    //         (event) => {
    //           if (event.data.appHeight && '31f2e' === event.data.inst) {
    //             let container = document.querySelector(
    //               '#scoreaxis-widget-31f2e iframe'
    //             );
    //             container &&
    //               (container.style.height =
    //                 parseInt(event.data.appHeight) + 'px');
    //           }
    //         },
    //         !1
    //       )}
    //       );
    //     </script>
    //   </div>
    // </div>
    // <div className=' box-border  font-sans bg-white mt-10 mx-5 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16  pr-5 h-screen'>
    //   <div className='font-bold text-2xl  lg:text-4xl pb-5'>
    //     FOOTBALL LEAGUE TABLE
    //   </div>
    //   <hr />
    //   <br></br>
    //   <ul className=' uppercase text-lg  text-center font-bold '>
    //     <li className='hover:text-red-600 pt-8'>
    //       <Link to='/PremierLeague'>Premier league</Link>
    //     </li>
    //     <li className='hover:text-red-600 pt-8 '>
    //       <Link to='/League1'>Ligue 1</Link>{' '}
    //     </li>
    //     <li className='hover:text-red-600 pt-8'>
    //       <Link to='/SerieA'> Serie A</Link>{' '}
    //     </li>
    //     <li className='hover:text-red-600 pt-8 '>
    //       <Link to='/Laliga'>La Liga</Link>{' '}
    //     </li>
    //     <li className='hover:text-red-600 pt-8 '>
    //       <Link to='/Bundesliga'> Bundesliga</Link>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default Footballranking;
