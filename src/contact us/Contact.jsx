import React from 'react';
import { IonIcon } from '@ionic/react';
import { addOutline, callOutline, locateOutline, logoFacebook, logoInstagram, logoLinkedin, mailOutline, mapOutline } from 'ionicons/icons';
const Contactus = () => {
  return (
    <body className='antialiased bg-gray-100'>
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className='flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0 bg-red-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden'>
          <div className="flex flex-col space-y-8 justify-between ">

            <div>
              <h1 className='font-bold text-4xl tracking-wide'>
                Contact Us 
              </h1>
              <p className='pt-2 text-red-200 text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quidem numquam adipisci accusamus ab ratione cumque aspernatur? Porro totam quae enim et ea fugit ipsam similique. Temporibus, repudiandae eius. Necessitatibus.
              </p>
            </div>
          <div className='flex flex-col space-y-6 '>
            <div className='inline-flex space-x-2 items-center'>
              <IonIcon icon={callOutline} className='text-xl' />
              <span>+91 8928373632</span>
            </div>
            <div className='inline-flex space-x-2 items-center'>
              <IonIcon icon={mailOutline} className='text-xl' />
              <span>mysaviour@gmail.com</span>
            </div>
            <div className='inline-flex space-x-2 items-center'>
              <IonIcon icon={mapOutline} className='text-xl' />
              <span>CSIT Durg,Balod Road,Durg</span>
            </div>
            </div>
            <div className='flex space-x-4 text-xl '>
              <a href='#'><IonIcon icon={logoFacebook}/></a>
              <a href='#'><IonIcon icon={logoInstagram}/></a>
              <a href='#'><IonIcon icon={logoLinkedin}/></a>
            </div>
            </div>
            <div className='relative'>
              <div className='absolute z=0 w-40 h-40 bg-red-300 rounded-full -right-28 -top-28'></div>
              <div className='absolute z=0 w-40 h-40 bg-red-300 rounded-full -left-28 -bottom-20'></div>
              <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                <form action='' className='flex flex-col space-y-4'>
                  <div>
                    <label htmlFor="" className='text-sm'>Your name</label>
                    <input type="text" placeholder="Your name" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none mt-2 focus:ring-2 focus:ring-red-400'/>
                  </div>
                  <div>
                    <label htmlFor="" className='text-sm'>Email Address</label>
                    <input type="email" placeholder="Email Address" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-400'/>
                  </div>
                  <div>
                    <label htmlFor="" className='text-sm'>Message</label>
                    <textarea type="text" placeholder="Message" rows={4} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-400'></textarea>
                  </div>
                  <button className='inline-block self-end bg-red-700 text-white font-bold rounded-lg px-6 py-2 uppercase '>Send Message</button>
                </form>

              </div>
            </div>



        </div>
      </div>
    </body>

  );
};

export default  Contactus;