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

const OtherProjects = () => {
  // tableau des projets ouverts (par index)
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleProject = (index: number) => {
    if (expandedProjects.includes(index)) {
      // si déjà ouvert → on le ferme
      setExpandedProjects(expandedProjects.filter((i) => i !== index));
    } else {
      // sinon → on l’ajoute à la liste
      setExpandedProjects([...expandedProjects, index]);
    }
  };

  const projects: Project[] = [
    {
      title: "Booki",
      description:
        "Site vitrine pour une agence de voyage, développé en HTML et CSS. Mise en pratique des fondamentaux du développement web avec une attention particulière portée sur la responsive design et l'accessibilité.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200",
      technologies: [{ name: "HTML" }, { name: "CSS" }],
      codeUrl: "https://github.com/Adr1e/Projetct_2",
    },
    {
      title: "Portfolio Architecte",
      description:
        "Site web dynamique pour une architecte d'intérieur. Implémentation d'une galerie de projets interactive avec JavaScript, permettant le tri, l'ajout et la suppression de projets. Intégration avec une API REST.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
      technologies: [{ name: "JavaScript" }, { name: "API REST" }],
      codeUrl: "https://github.com/Adr1e/project3-OC",
    },
    {
      title: "Nina Carducci Photography",
      description:
        "Optimisation SEO et debug d'un site de photographie. Amélioration des performances avec Lighthouse, optimisation de l'accessibilité avec WAVE, et mise en place des meilleures pratiques pour le référencement.",
      image:
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1200",
      technologies: [{ name: "SEO" }, { name: "Performance" }],
      codeUrl: "https://github.com/Adr1e/Adr1e-OPC_project_5",
    },
    {
      title: "MenuMaker by Qwenta",
      description:
        "Projet en tant que chef de projet pour Webagencia. Gestion de projet agile avec mise en place d'un tableau Kanban, utilisation d'outils comme Feedly et Notion pour la veille technologique et la gestion des tâches.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200",
      technologies: [{ name: "Agile" }, { name: "Gestion de projet" }],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Autres Réalisations
      </h2>

      {/* Layout avec grid et alignement haut */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {projects.map((project, index) => {
          const isExpanded = expandedProjects.includes(index);

          return (
            <div key={index} className="transition-all duration-300">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleProject(index)}
                  className="w-full text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <ChevronDown
                      className={`text-gray-400 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0">
                    <ProjectCard {...project} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProjects;
