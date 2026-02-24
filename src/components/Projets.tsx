import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import portfolioImg from "../images/portfolio.png";
import EcomImg from "../images/Ecom.png";

export function Projects() {
  const projects = [
    {
      title: "Site E-commerce",
      description:
        "Application web moderne pour un site de e-commerce de vente de meubes avec panier, paiement et gestion des produits.",
      image: EcomImg ,
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://elegant-house.vercel.app/",
      githubUrl: "https://github.com/Freedeldev/elegantHouse",
    },
    {
      title: "Portfolio Personnel",
      description:
        "Portfolio moderne développé avec React et Tailwind CSS pour présenter mes projets et compétences.",
      image: portfolioImg, // Assure-toi d'avoir cette image dans ton dossier src/images
      tags: ["React", "Tailwind", "Framer Motion"],
      demoUrl: "",
      githubUrl: "https://github.com/Freedeldev/porfolio_fredy",
    },
  ];

  return (
    <section id="projets" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Voici quelques projets réels sur lesquels j’ai travaillé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x400";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Démo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}