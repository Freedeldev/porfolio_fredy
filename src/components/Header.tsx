import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-blue-100/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-linear-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Code2 className="text-white" size={24} />
              </div>
            </div>
            <div>
              <div className="font-bold text-xl bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GBETOWENONMON Frédy
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <Sparkles size={10} className="text-yellow-500" />
                Développeur Junior
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {['accueil', 'apropos', 'competences', 'projets', 'contact'].map((section, index) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(section)}
                className="relative px-5 py-2.5 text-gray-700 hover:text-blue-600 transition-colors group"
              >
                <span className="relative z-10 capitalize font-medium">
                  {section === 'apropos' ? 'À propos' : section}
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 group-hover:w-3/4 transition-all duration-300" />
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all"
            >
              Contactez-moi
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-6 border-t border-blue-100/20"
          >
            <div className="flex flex-col space-y-2">
              {['accueil', 'apropos', 'competences', 'projets', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(section)}
                  className="text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all capitalize font-medium"
                >
                  {section === 'apropos' ? 'À propos' : section}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}