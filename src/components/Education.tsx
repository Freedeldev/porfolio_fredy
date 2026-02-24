import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export function Education() {
  const timeline = [
    {
      title: "Baccalauréat Scientifique (Série D)",
      date: "2024",
      description:
        "Obtention du Baccalauréat scientifique, marquant le début de mon orientation vers les technologies et l'informatique.",
      icon: <GraduationCap size={20} />,
    },
    {
      title: "Licence 1 - Informatique | HECM",
      date: "2024 - 2025",
      description:
        "Acquisition des bases solides en programmation, développement web et réseaux informatiques.",
      icon: <GraduationCap size={20} />,
    },
    {
      title: "Stage - BETA2-AFRIQUE TECHNOLOGIES",
      date: "2025",
      description:
        "Stage professionnel de 2 mois en développement web et mobile. Participation à des projets concrets et découverte du travail en environnement professionnel.",
      icon: <Briefcase size={20} />,
    },
    {
      title: "Licence 2 - Informatique | HECM",
      date: "2025 - Présent",
      description:
        "Approfondissement des compétences en développement logiciel et réalisation de projets académiques et personnels.",
      icon: <GraduationCap size={20} />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Parcours Académique
        </motion.h2>

        <div className="relative border-l-4 border-blue-600">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 ml-6"
            >
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-md">
                {item.icon}
              </span>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <span className="text-sm text-blue-600 font-medium">
                  {item.date}
                </span>
                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}