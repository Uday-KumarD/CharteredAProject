import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-white p-6 bg-blue-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h4>Why Refer Our Page?</h4>
          <p>Chartered Accounts Available</p>
        </div>
        <div>
          <h4>Rewards</h4>
          <p>Exciting offers for loyal customers.</p>
        </div>
        <div>
          <h4>News & Info</h4>
          <p>Latest updates about CA services.</p>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button className="btn btn-primary hover:text-black" onClick={() => window.location.href = '/contact'}>Contact Us</button>
        <button className="btn btn-secondary  hover:text-black" onClick={() => window.location.href = '/about'}>About Us</button>
      </div>
    </footer>
  );
};

export default Footer;
