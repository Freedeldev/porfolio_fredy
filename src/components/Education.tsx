import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  const educationData = [
    {
      degree: "Licence en Systèmes Informatiques et Logiciels",
      school: "Université XYZ",
      year: "2023 - 2026",
      description: "Formation axée sur le développement web, les bases de données et la programmation."
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée ABC",
      year: "2020 - 2023",
      description: "Spécialisation en mathématiques et sciences."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Parcours académique
          </h2>
          <p className="text-gray-600">
            Mon cheminement académique et les compétences acquises.
          </p>
        </motion.div>

        <div className="relative border-l-4 border-blue-600">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white">
                <GraduationCap size={16} />
              </span>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.degree}
              </h3>
              <p className="text-blue-600 font-medium">{item.school}</p>
              <span className="text-sm text-gray-500">{item.year}</span>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}