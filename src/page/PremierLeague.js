import React from 'react';
import { Link } from 'react-router-dom';

function premierLeague() {
  // const [click, setClick] = useState(false);
  return (
    <div className=' box-border  font-sans bg-white dark:bg-gray-900 dark:text-white mt-10 mx-5 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16  pr-5'>
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
            <Link to='/Bundesliga'> Champions League</Link>
          </li>
          <li className='hover:text-red-600 pt-3'>
            <Link to='/Bundesliga'>Europa League</Link>
          </li>
        </ul>
      </div>
      <div className='font-bold text-2xl  lg:text-4xl pb-5'>Premier League</div>
      <hr />
      <br></br>
      <div
        id='scoreaxis-widget-31f2e'
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
          title='premier league'
          id='Iframe'
          src='https://www.scoreaxis.com/widget/standings-widget/8?links=0&amp;inst=31f2e'
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
              if (event.data.appHeight && '31f2e' === event.data.inst) {
                let container = document.querySelector(
                  '#scoreaxis-widget-31f2e iframe'
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
      {/* <div>
        <button onClick={() => setClick(false)}>Top Goal scocer</button>
        <div className={click}>
          <div
            id='scoreaxis-widget-6875e'
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
              id='Iframe'
              title='goal scorer'
              src='https://www.scoreaxis.com/widget/league-top-players/8?autoHeight=1&amp;links=0&amp;playersNumber=10&amp;inst=6875e'
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
                  if (event.data.appHeight && '6875e' === event.data.inst) {
                    let container = document.querySelector(
                      '#scoreaxis-widget-6875e iframe'
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
      </div> */}
    </div>
  );
}

export default premierLeague;
