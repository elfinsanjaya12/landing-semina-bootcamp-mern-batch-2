import React from 'react';

export default function Statistics() {
  return (
    <section className='statistics container'>
      <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-5'>
        <div className='d-flex flex-column align-items-center gap-1'>
          <div className='title'>190K+</div>
          <p>Events Created</p>
        </div>
        <div className='vr'></div>
        <div className='d-flex flex-column align-items-center gap-1'>
          <div className='title'>3M</div>
          <p>People Joined</p>
        </div>
        <div className='vr d-none d-md-block'></div>
        <div className='d-flex flex-column align-items-center gap-1'>
          <div className='title'>5K+</div>
          <p>Success Startup</p>
        </div>
        <div className='vr'></div>
        <div className='d-flex flex-column align-items-center gap-1'>
          <div className='title'>113K+</div>
          <p>Top Speakers</p>
        </div>
      </div>
    </section>
  );
}
