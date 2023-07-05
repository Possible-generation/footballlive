import React from 'react';

function goalslight() {
  return (
    <div className=' box-border  font-sans bg-white mt-10 mx-5 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16  pr-5'>
      <div>
        {' '}
        <p className='mx-24 uppercase text-2xl font-bold mb-3'>
          Manchester united VS Nottingham
        </p>
        <iframe
          className='lg:w-[640px] lg:mx-auto'
          title='manu'
          width='400'
          height='350'
          src='//ok.ru/videoembed/4306951473795'
          style={{ border: 'none' }}
        ></iframe>
        <p className='mx-24 uppercase text-2xl font-bold mb-3'>
          Manchester united VS Nottingham
        </p>
      </div>
      <div>
        {' '}
        <iframe
          className='lg:w-[640px] lg:mx-auto'
          title='manu'
          width='400'
          height='350'
          src=' https://vedwathoofoot2.elhighlights.com/embed/uI02D2sL7mcbF'
          style={{ border: 'none' }}
          allowfullscreen
        ></iframe>
        <p className='mx-24 uppercase text-2xl font-bold mb-3'>
          Real Betis 1-2 Barcelona Highlights
        </p>
      </div>
      <iframe
        className='lg:w-[640px] lg:mx-auto'
        title='rt'
        width='400'
        height='350'
        src='//ok.ru/videoembed/4303997831811?autoplay=1'
        frameborder='0'
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default goalslight;
