
import { GraduationCap, Heart } from 'lucide-react';

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-6 h-6 text-emerald-500" />
          <h2 className="text-xl font-bold">Formation</h2>
        </div>
        <p className="text-gray-700">
          Formation intensive en développement web chez OpenClassrooms, où j'ai
          acquis des compétences solides en développement front-end et back-end à
          travers des projets concrets et professionnalisants.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-red-500" />
          <h2 className="text-xl font-bold">Centres d'intérêts</h2>
        </div>
        <p className="text-gray-700">
          Passionné par les nouvelles technologies et la cybersécurité. J'aime relever des
          défis techniques et participer à des projets innovants qui me permettent
          d'approfondir mes connaissances.
        </p>
      </div>
    </div>
  );
};

export default Education;