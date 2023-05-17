import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4 py-6 flex justify-center items-center">
        <div className="flex items-center">
          <img
            src="http://www.iiitmanipur.ac.in/img/iiitm-logo.png"
            alt="Institute Logo"
            className="w-20 h-auto mr-2"
          />
          <div className="text-center">
            <h1 className="text-xl font-bold text-white mb-1">
              Institute Name (English)
            </h1>
            <h2 className="text-2xl font-bold text-white mb-1">
              इंस्टीट्यूट का नाम (Hindi)
            </h2>
            <p className="text-sm text-gray-300">
              Institute Address, City, State, Country
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
