
import { User, Code, Layout } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="text-center">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mt-4">Adrien Fischer</h1>
      <p className="text-lg text-gray-600 mb-8">Développeur Full Stack en devenir</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <User className="w-8 h-8 text-purple-500" />
          </div>
          <h3 className="font-bold mb-2">Expertise</h3>
          <p className="text-gray-600">Soif d'apprendre et passionné par le développement</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Code className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="font-bold mb-2">Technologies</h3>
          <p className="text-gray-600">React, Node.js, MongoDB, JavaScript, Sass</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Layout className="w-8 h-8 text-emerald-500" />
          </div>
          <h3 className="font-bold mb-2">Secteurs</h3>
          <p className="text-gray-600">Web, Mobile, Cybersécurité</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;