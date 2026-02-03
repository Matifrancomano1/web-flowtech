import { useState, useEffect } from 'react';
import { motion as Motion} from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar el scroll para cambiar el fondo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Packs', href: '#packs' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/60 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* El clúster de píxeles del logo [cite: 32] */}
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2 h-2 bg-ft-blue"></div>
            <div className="w-2 h-2 bg-ft-white"></div>
            <div className="w-2 h-2 bg-ft-white"></div>
            <div className="w-2 h-2 bg-ft-blue"></div>
          </div>
          <span className="text-lg sm:text-2xl font-bold text-ft-white tracking-tight">
            Flow<span className="text-ft-blue">Tech</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-ft-blue font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary">
            Presupuesto
          </button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <Motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-950 border-b border-slate-800 absolute w-full px-6 py-8"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-gray-300 text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white py-3 rounded-xl font-bold">
              Presupuesto
            </button>
          </div>
        </Motion.div>
      )}
    </nav>
  );
};

export default Navbar;