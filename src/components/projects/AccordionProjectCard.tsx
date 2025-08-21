import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: { name: string }[];
  codeUrl?: string;
}

const AccordionProjectCard = (project: Project) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Bouton entête */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left hover:bg-gray-50 transition-colors"
      >
        <div className="p-6 flex items-center justify-between">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <ChevronDown
            className={`text-gray-400 transition-transform ${
              expanded ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Contenu déroulant */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "max-h-[800px]" : "max-h-0"
        }`}
      >
        <div className="p-6 pt-0">
          {/* Ici on réutilise ProjectCard */}
          <ProjectCard {...project} />
        </div>
      </div>
    </div>
  );
};

export default AccordionProjectCard;
