import React from 'react';

const AgendarDemo = ({ message }) => {
  return (
    <div className='flex justify-center my-8'>
      <button className='w-80 h-11 text-lg bg-azul-cielo rounded-3xl mt-4 font-bold text-gray-900'>
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ10eN6GdCOG_MbpVprlq7PUQiyWPloSEn1y6AI="
          target='_blank'
          rel="noopener noreferrer"
        >
          {message}
        </a>
      </button>
    </div>
  );
}

export default AgendarDemo;

