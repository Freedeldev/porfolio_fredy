import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">GBETOWENONMON Frédy </h3>
            <p className="text-gray-400">
              Développeur Junior Web & Mobile passionné par la création d'expériences digitales exceptionnelles.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col space-y-2">
              <a href="#accueil" className="text-gray-400 hover:text-white transition-colors">
                Accueil
              </a>
              <a href="#apropos" className="text-gray-400 hover:text-white transition-colors">
                À propos
              </a>
              <a href="#competences" className="text-gray-400 hover:text-white transition-colors">
                Compétences
              </a>
              <a href="#projets" className="text-gray-400 hover:text-white transition-colors">
                Projets
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Fredy-mahugnon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/fredy-gbetowenonmon-9b1a4b1b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:fredygbetowenonmon02@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} GBETOWENONMON Frédy. Tous droits réservés. <Heart size={16} className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
