import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwY29kaW5nJTIwZGV2ZWxvcGVyJTIwd29ya3NwYWNlJTIwc2V0dXB8ZW58MXx8fHwxNzcxODU3MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/95 via-blue-900/90 to-purple-900/95"></div>
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-blue-400/20 text-6xl font-mono"
        >
          {'</>'}
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 text-purple-400/20 text-5xl font-mono"
        >
          {'{}'}
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 text-blue-400/20 text-4xl font-mono"
        >
          {'()'}
        </motion.div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
           GBETOWENONMON Mahugnon Frédy Abdon
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Développeur Junior Web & Mobile
          </p>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
            Passionné par la création d'applications web modernes et d'applications mobiles innovantes. 
            Je transforme les idées en solutions digitales performantes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projets')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir mes projets
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Me contacter
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Fredy-mahugnon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:mailto:fredygbetowenonmon02@gmail.com"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection('apropos')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
}