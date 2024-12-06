
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Mon Vieux Grimoire",
      description: "API backend pour une plateforme de notation de livres. Développée avec Node.js et MongoDB, elle gère l'authentification des utilisateurs, les notations de livres et le stockage sécurisé des données. Implémentation de fonctionnalités avancées comme le calcul de moyennes de notes et la gestion de fichiers avec Multer.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000",
      technologies: [
        { name: "Node.js" },
        { name: "MongoDB" },
        { name: "Express" },
        { name: "JWT" },
        { name: "Multer" }
      ],
      codeUrl: "https://github.com/Adr1e/OPC_project_7"
    },
    {
      title: "Kasa",
      description: "Application React de location immobilière avec une interface moderne et responsive. Utilisation de Sass pour un style élégant et maintenable, avec des animations fluides et une navigation optimisée. Développement d'un carrousel d'images personnalisé et d'un système de filtrage avancé.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000",
      technologies: [
        { name: "React" },
        { name: "Sass" },
        { name: "React Router" }
      ],
      codeUrl: "https://github.com/Adr1e/OPC_project_6"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;