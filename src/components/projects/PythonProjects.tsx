import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProjectCard from './ProjectCard';

import chessImage from "./images/free-photo-of-close-up-of-a-chessboard.jpeg";


interface Project {
  title: string;
  description: string;
  image: string;
  technologies: { name: string }[];
  codeUrl?: string;
}

const PythonProjects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleProject = (index: number) => {
    setExpandedProjects((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const projects: Project[] = [
    {
      title: "Books to Scrape",
      description:
        "Projet de scraping en plusieurs phases : récupération des informations des livres, génération de fichiers CSV par catégorie et téléchargement des images. Utilisation de requests, BeautifulSoup et gestion des fichiers.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200",
      technologies: [{ name: "Python" }, { name: "BeautifulSoup" }, { name: "Pandas" }],
      codeUrl: "https://github.com/Adr1e/books-scraper",
    },
    {
      title: "AlgoInvest & Trade",
      description:
        "Développement d'un algorithme de force brute puis d'un algorithme optimisé (programmation dynamique type sac à dos 0/1) pour maximiser les bénéfices d'investissements. Comparaison de performances et complexité algorithmique.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
      technologies: [{ name: "Python" }, { name: "Algorithmes" }, { name: "Optimisation" }],
      codeUrl: "https://github.com/Adr1e/algo-invest-trade",
    },
    {
      title: "Chess Tournament",
      description:
        "Application de gestion de tournois d’échecs en architecture MVC. ...",
      image:chessImage,
      technologies: [{ name: "Python" }, { name: "MVC" }, { name: "JSON" }],
      codeUrl: "https://github.com/Adr1e/chess-tournament",
    },
    {
      title: "JustStreamIt",
      description:
        "Front-end en HTML, CSS et JavaScript consommant l'API locale OCMovies (Django). Fonctionnalités : affichage du meilleur film, carrousels par genres, modale avec détails. Gestion dynamique du DOM et responsive design.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200",
      technologies: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
      codeUrl: "https://github.com/Adr1e/juststreamit",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projets Python
      </h2>

      <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
        {projects.map((project, index) => (
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
                      expandedProjects.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedProjects.includes(index) ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0">
                  <ProjectCard {...project} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PythonProjects;
