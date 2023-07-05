import React from 'react';

function LiveStream() {
  return (
    <div className=' box-border  font-sans '>
      <div className='bg-white my-6 mx-3 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16'>
        <p className=' text-3xl border-l-8 border-blue-500 pl-2'>
          Manchester Utd today's live
        </p>
      </div>
      <div className='pr-6 bg-white my-6 mx-3 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16'>
        <iframe
          title='player'
          className='h-[500px] w-full'
          src='https://www.yalla-shoot-pro.com/albaplayer/%d8%a8%d9%8a-%d8%a7%d9%86-%d8%a8%d8%b1%d9%8a%d9%85%d9%8a%d9%88%d9%85-1/'
          allowFullScreen='true'
          frameborder='0'
        ></iframe>
      </div>
      <div className=' font-sans bg-white mt-8 mx-5 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16  pr-5 mb-11'></div>
    </div>
  );
}

export default LiveStream;
