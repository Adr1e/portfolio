import React from 'react';
import { Code2, User, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#profile" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <User size={18} />
                Profil
              </a>
            </li>
            <li>
              <a href="#projects" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Code2 size={18} />
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={18} />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;