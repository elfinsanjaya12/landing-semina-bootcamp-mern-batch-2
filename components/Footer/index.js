/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Footer() {
  return (
    <footer className='footer bg-navy'>
      <div className='container'>
        <a href='index.html'>
          <img src='/images/logo.svg' alt='semina' />
        </a>
        <div className='mt-3 d-flex flex-row flex-wrap footer-content align-items-baseline'>
          <p className='paragraph'>
            Semina adalah tempat di mana <br className='d-md-block d-none' />{' '}
            anda dapat mencari event sesuai <br className='d-md-block d-none' />{' '}
            dengan minat & terdekat.
          </p>
          <div className='d-flex flex-column footer-links'>
            <div className='title-links mb-3'>Features</div>
            <a href='#'>Virtual</a>
            <a href='#'>Pricing</a>
            <a href='#'>Merchant</a>
            <a href='#'>Tickets</a>
          </div>
          <div className='d-flex flex-column footer-links'>
            <div className='title-links mb-3'>Company</div>
            <a href='#'>Jobs</a>
            <a href='#'>API</a>
            <a href='#'>Press</a>
            <a href='#'>Sitemap</a>
          </div>
          <div className='d-flex flex-column footer-links'>
            <div className='title-links mb-3'>Learn</div>
            <a href='#'>Guidebook</a>
            <a href='#'>Inspiration</a>
            <a href='#'>Community</a>
            <a href='#'>Tools</a>
          </div>
        </div>
        <div className='d-flex justify-content-center paragraph all-rights'>
          All Rights Reserved. Semina Angga 2022.
        </div>
      </div>
    </footer>
  );
}
