import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Me Contacter</h2>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center space-y-6">
          <a
            href="mailto:adrienfischer274@gmail.com"
            className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors w-full max-w-md justify-center"
          >
            <Mail className="text-gray-700" size={20} />
            <span className="text-gray-800">adrienfischer274@gmail.com</span>
          </a>
          
          <a
            href="tel:0781407415"
            className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors w-full max-w-md justify-center"
          >
            <Phone className="text-gray-700" size={20} />
            <span className="text-gray-800">07 81 40 74 15</span>
          </a>

          <div className="flex justify-center gap-8 w-full max-w-md">
            <a
              href="https://www.linkedin.com/in/fischer-adrien-b9787a2a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Adr1e"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-700">
            <MapPin size={20} />
            <span>Paris, France</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;