import React from 'react';

const DisqualifiedPage = ({ message }) => {
  return (
    <div className='container mt-5 pt-5'>
      <h1 className='h2 mb-4'>Sorry, you do not qualify at this time.</h1>
      <p className='lead' style={{ maxWidth: 640 }}>
        {message}
      </p>

      <h2 className='h4 mb-3 mt-5'>Get In Touch With Us</h2>
      <p>
        <b>Phone:</b> 730.234.8765 <br />
        <b>Toll Free:</b> 1.877.546.4545
        <br />
        <b>Email:</b> <a>customer.service@loans.co</a>
      </p>
    </div>
  );
};

export default DisqualifiedPage;
