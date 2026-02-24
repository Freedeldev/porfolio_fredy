import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profile from "../images/profile.jpeg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/95 via-blue-900/90 to-purple-900/95"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
              <img
                src={profile}
                alt="Fredy Mahugnon"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-pulse opacity-30"></div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            GBETOWENONMON <br />
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mahugnon Frédy Abdon
            </span>
          </h1>

          <p className="text-xl text-blue-100 mb-6">
            Développeur Web & Mobile
          </p>

          <p className="text-gray-300 mb-8 max-w-xl">
            Passionné par la création d'applications web modernes et mobiles innovantes.
            Je transforme les idées en solutions digitales performantes.
          </p>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => scrollToSection("projets")}
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Voir mes projets
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-200 transition"
            >
              Me contacter
            </button>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Fredy-mahugnon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Github size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/fredy-gbetowenonmon-b7a026333"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={26} />
            </a>

            <a
              href="mailto:fredygbetowenonmon02@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <Mail size={26} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.button
        onClick={() => scrollToSection("apropos")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}