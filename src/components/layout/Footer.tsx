import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Adrien Fischer. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;