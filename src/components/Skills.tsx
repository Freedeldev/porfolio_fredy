import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript/TypeScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Tailwind CSS', level: 80 },
      ],
    },
    {
      category: 'Mobile',
      skills: [
        { name: 'React Native', level: 70 },
        { name: 'iOS/Android', level: 30 },
      ],
    },
    {
      category: 'Backend & Outils',
      skills: [
        { name: 'PHP', level: 60 },
        { name: 'Git/GitHub', level: 75 },
        { name: 'My SQL', level: 70 },
        { name: 'VS code', level: 70 },
      ],
    },
  ];

  return (
    <section id="competences" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Voici les technologies et outils que je maîtrise pour créer des solutions digitales modernes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                        className="bg-linear-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
