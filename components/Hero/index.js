import React from 'react';

export default function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='hero-headline'>
          Expand Your <span className='text-gradient-blue'>Knowledge</span>{' '}
          <br className='d-none d-lg-block' />
          by <span className='text-gradient-pink'>Joining</span> Our Greatest
          Events
        </div>
        <p className='hero-paragraph'>
          Kami menyediakan berbagai acara terbaik untuk membantu{' '}
          <br className='d-none d-lg-block' />
          anda dalam meningkatkan skills di bidang teknologi
        </p>
        <a href='#grow-today' className='btn-green'>
          Browse Now
        </a>
      </div>

      <div className='d-flex flex-row flex-nowrap justify-content-center align-items-center gap-5 header-image'>
        <img src='/images/1.png' alt='semina' className='img-1' />
        <img src='/images/2.png' alt='semina' className='img-2' />
        <img src='/images/1.png' alt='semina' className='img-1' />
      </div>
    </>
  );
}
