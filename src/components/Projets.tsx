import { motion } from "framer-motion";
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Site E-commerce',
      description: 'Application web moderne pour un site de e-commerce avec panier, paiement et gestion des produits.',
      image: 'https://images.unsplash.com/photo-1768987439382-894ea4e2a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzE4NTYyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Application Mobile Fitness',
      description: 'App mobile pour le suivi des entraînements, calories et objectifs fitness avec interface intuitive.',
      image: 'https://images.unsplash.com/photo-1758598304048-7bc68cf97c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHBob25lJTIwc2NyZWVufGVufDF8fHx8MTc3MTc3MTE1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Firebase', 'Redux'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Designer',
      description: 'Site portfolio responsive pour un designer avec galerie photos, animations et formulaire de contact.',
      image: 'https://images.unsplash.com/photo-1763437153598-78b5579ddefa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MTc3NzI3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'Framer Motion', 'Sanity CMS'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif avec graphiques et statistiques en temps réel pour la visualisation de données.',
      image: 'https://images.unsplash.com/photo-1763568258535-fa1066506571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxODQ1MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: '#',
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
            Découvrez quelques-uns de mes projets récents qui illustrent mes compétences et ma passion pour le développement.
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
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
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Démo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
