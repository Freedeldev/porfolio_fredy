import { motion } from "framer-motion";
import { Code2, Smartphone, Lightbulb } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Développement Web',
      description: 'Création de sites web modernes et responsifs avec React, TypeScript et Tailwind CSS.',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Applications Mobile',
      description: 'Développement d\'applications mobiles natives et cross-platform pour iOS et Android.',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Solutions Innovantes',
      description: 'Approche créative et moderne pour résoudre les défis techniques et offrir la meilleure expérience utilisateur.',
    },
  ];

  return (
    <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développeur junior passionné avec une solide base en développement web et mobile. 
            Je suis constamment à la recherche de nouvelles technologies et de meilleures pratiques 
            pour créer des applications performantes et intuitives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
